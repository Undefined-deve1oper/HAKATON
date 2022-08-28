import { Module } from '../core/module'
import { random } from "@/utils";

export class SoundModule extends Module {
    constructor( type, text ) {
        super( type, text )

        this.audioFiles = [];

        this.importMusic = ( req ) => {
            req.keys().forEach( ( path, idx ) => (this.audioFiles[idx] = req( path )) );
        }

        this.importMusic( require.context( '../sounds', true, /\.mp3$/ ) );
    }

    trigger() {
        // Получаем рандомное число
        const randomSound = random( this.audioFiles.length );
        // Получаем аудио
        const audio = new Audio( this.audioFiles[randomSound].default );
        // Воспроизводим звук
        const sound = audio.play();
    }
}   