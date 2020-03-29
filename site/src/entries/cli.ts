import { Main } from '../main';
import { display } from '../render';

const main = new Main();

(async function() {
    const data = await main.getIssueCount();
    await main.displayIssueCount(data, async (arg) => {
        console.log(`Discussion Count: ${arg}`);
    })
}())

