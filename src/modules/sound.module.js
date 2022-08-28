import {Module} from '../core/module'
import JS_SOUND from '../sounds/discord-notification.mp3';


export class SoundModule extends Module {
    constructor(type, text) {
        super (type, text)
    }

    getRandomSound() {
        // const arrSound= ['../sounds/iphone_text_message.mp3', '../sounds/iphone_text_message.mp3'];
        // let randomSound = Math.floor(Math.random() * arrSound.length - 1);
        let audio = new Audio();
        audio.src = JS_SOUND;
        audio.play();
    }

    trigger() {
        document.body = this.getRandomSound();

    }
}   