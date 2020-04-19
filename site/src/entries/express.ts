import { Application } from '../application';
import { display } from '../render';
import { RequestHandler, default as express } from 'express';

(function () {
    const app = express()

    const main = new Application();

    const port = 3000
    // app.get('/', async function (req, res) {
    //     // todo: still has bugs
    //     const result = await main.getGetIssues();
    //     res.set({
    //         'content-type': 'text/html; charset=utf-8'
    //     });
    //     res.json(result);
    // });
    app.get('/jp', async function (req, res) {
        res.set({
            'content-type': 'text/html; charset=utf-8'
        });
        for await (let element of main.pageJP()) {
            res.write(element);
        }
        res.end();
    });
    app.get('/algo', async function (req, res) {
        res.set({
            'content-type': 'text/html; charset=utf-8'
        });
        for await (let element of main.pageAlgorithm()) {
            res.write(element);
        }
        res.end();
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    })
}());
