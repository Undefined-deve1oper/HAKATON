import { Module } from '../core/module'

export class BackgroundModule extends Module {
    constructor( type, text ) {
        super( type, text )
    }

    // Создаем риватный метод который будет менять цвет background-а
    #getRandomColor() {
        // Создаем переменную letters в которой текст из которого мы будем делать цвет
        const letters = "0123456789ABCDEF";
        let color = "#"; // Создаем переменную color куда будем подставлять значение

        // Создаем цикл и создаем рандомный цвет
        for ( let i = 0; i < 6; i++ ) {
            color += letters[Math.floor( Math.random() * 16 )];
        }
        // возвращаем цвет
        return color;
    };

    trigger() {
        document.body.style.backgroundColor = this.#getRandomColor(); // и меняем цвет background-а
    };
}