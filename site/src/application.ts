import { promises } from 'fs';
import { default as fetch } from "node-fetch";
import { join } from 'path';
import { display } from './render';
import { GetIssues } from './queries/types/GetIssues'
import { ExecutionResult } from 'graphql'
import { JP } from './pages/jp';
import { Algorithm } from './pages/algorithm';


async function loadData<T>(document: string, variables?: any): Promise<T> {
    const token = "0159f88b2ff67decd686a779d8551b84e2628875";
    const ret = await fetch(
        // https://developer.github.com/v4/guides/forming-calls/#the-graphql-endpoint
        "https://api.github.com/graphql",
        {
            // "credentials": "include",
            "headers": {
                "Authorization": `bearer ${token}`
            },
            "body": JSON.stringify({
                query: document,
                variables: variables,
                operationName: "GetIssues"
            }),
            "method": "POST"
        });
    if (ret.status != 200) {
        throw new Error(await ret.text());
    }
    const result: ExecutionResult<T> = await ret.json();
    if (result.errors) {
        throw new Error(JSON.stringify(result));
    }
    if (!result.data) {
        throw new Error(`result.data is ${result.data}`);
    }
    return result.data;
}

type Displayer<T> = (data: T) => Promise<void>

export class Application {
    constructor(

    ) { }

    async getGetIssues(): Promise<GetIssues> {
        const query = await promises.readFile(join(__dirname, "./queries/queries.gql"));
        return await loadData<GetIssues>(String(query));
    }

    async displayIssues(data: GetIssues, displayer: Displayer<number>) {
        if (data.repository == null) {
            return;
        }
        await displayer(data.repository.issues.totalCount)
    }

    async *pageJP() {
        yield* JP();
    }

    async *pageAlgorithm() {
        yield* Algorithm();
    }
}
