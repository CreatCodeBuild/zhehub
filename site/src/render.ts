import { Issue, mapIssuesNodeToIssue } from "./model"
import { IssueQueryResult} from "./issue";
import marked from 'marked';

function* rendor(issue: Issue): Iterable<string> {
    yield `
                <div>${issue.title}</div>
                <div>${marked(issue.body)}</div>
            `;
    yield ``
    for (let comment of issue.comments) {
        yield `
                <div><a>${comment.author.name}</a></div>
                <div>${marked(comment.body)}</div>
                `;
    }
}

interface Displayer {
    (content: string)
}


export function display(result: IssueQueryResult, displayer: Displayer) {
    for (let issue of result.data.viewer.repository.issues.nodes.map(mapIssuesNodeToIssue)) {
        for (let view of rendor(issue)) {            
            displayer(view);
        }
    }
}