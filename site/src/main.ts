import { promises } from 'fs';
import { default as fetch } from "node-fetch";




async function main() {
    const queryIssue = await promises.readFile("./issue.gql");
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
    const json = await ret.text();
    console.log(json);
}
main();


