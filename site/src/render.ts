import { Issue, mapIssuesNodeToIssue } from "./model"
import { IssueQueryResult} from "./issue";

function* rendor(issue: Issue): Iterable<string> {
    yield `
                <div>${issue.title}</div>
                <div>${issue.body}</div>
            `;
    for (let comment of issue.comments) {
        yield `
                <div>${comment.author.name}</div>
                <div>${comment.body}</div>
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