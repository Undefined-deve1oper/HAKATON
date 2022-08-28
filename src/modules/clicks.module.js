import {Module} from '../core/module'

export class ClicksModule extends Module {
    #scope

    constructor(type, text) {
        super(type, text);

        this.#scope = document.querySelector( 'body' );
    };

    trigger() {
        let clickCount = -1;
        function handleMouseClick(event) {
            clickCount++;
          };
        
        this.#scope.addEventListener('click', handleMouseClick);
        setTimeout(() => {
            console.log(clickCount);
            this.#scope.removeEventListener('click', handleMouseClick)
        }, 5000);
    };
}