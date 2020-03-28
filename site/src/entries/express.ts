import { main } from '../main';
import { display } from '../render';
import { RequestHandler, Application, default as express } from 'express';

export const app = express()

main({
    runner: (result) => {
        const port = 3000
        app.get('/', function (req, res) {
            res.set({
                'content-type': 'text/html; charset=utf-8'
            })
            display(result, res.write.bind(res));
            res.end();
        })
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`)
        })
    }
});
