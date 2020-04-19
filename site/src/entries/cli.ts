import { Application } from '../application';
import { display } from '../render';

const main = new Application();

(async function() {
    const data = await main.getIssueCount();
    await main.displayIssueCount(data, async (arg) => {
        console.log(`Discussion Count: ${arg}`);
    })
}())

