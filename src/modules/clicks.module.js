import {Module} from '../core/module'

export class ClicksModule extends Module {
    #scope

    constructor(type, text) {
        super(type, text);

        this.#scope = document.querySelector( 'body' );
    };

    trigger() {
        let clickCount = -1;
        this.#scope.addEventListener('click', () => {
            clickCount++;
        });
        setTimeout(() => console.log(clickCount), 5000);
    };
}