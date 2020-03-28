import { promises } from 'fs';
import { default as fetch } from "node-fetch";
import { join } from 'path';
import { IssueQueryResult, IssuesNode, CommentsNode } from './issue';
import { mapIssuesNodeToIssue } from './model';
import { display } from './render';


async function loadData(): Promise<IssueQueryResult> {
    const queryIssue = await promises.readFile(join(__dirname, "./issue.gql"));
    const httpBody = {
        query: String(queryIssue)
    };
    const token = "0159f88b2ff67decd686a779d8551b84e2628875";

    const ret = await fetch(
        // https://developer.github.com/v4/guides/forming-calls/#the-graphql-endpoint
        "https://api.github.com/graphql",
        {
            "credentials": "include",
            "headers": {
                "Authorization": `bearer ${token}`
            },
            "body": JSON.stringify(httpBody),
            "method": "POST"
        });
    return ret.json();
}

interface Runner {
    (result: IssueQueryResult)
}

interface Dependencies {
    runner: Runner
}

export async function main(dep: Dependencies) {
    const result = await loadData()
    dep.runner(result);
}
