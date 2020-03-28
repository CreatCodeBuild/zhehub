import { main } from '../main';
import { display } from '../render';

main({
    runner: (result) => {
        display(result, console.log);
    }
});
