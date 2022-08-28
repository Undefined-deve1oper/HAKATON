import { getRandomArrayElement, getRandomColor, random } from '../../src/utils';
import { Module } from '../core/module';

export class RandomFigure extends Module {
    #scope

    constructor( type, text ) {
        //инициализация начальных значений
        super( type, text )
        this.#scope = document.querySelector( 'body' );
        this.pageWidth = document.documentElement.scrollWidth - 300 // определение ширины экрана
        this.pageHeight = document.documentElement.scrollHeight - 200 //определение высоты экрана
        this.figureClasses = ["rabbet", "hexagon", "right-arrow", "message", "rhomb", "pentagon", "star"];
    }

    trigger() {
        let randomFigureClass = getRandomArrayElement( this.figureClasses );

        const figure = document.createElement( 'div' );

        figure.id = "figure";
        figure.classList.add( randomFigureClass );
        figure.style.cssText = `
            position: absolute;
            top: ${ random(  this.pageHeight ) }px;
            left: ${random(  this.pageWidth ) }px;
            width: ${ random(  200 ) }px;
            height: ${ random(  180 ) }px;
            background: ${ getRandomColor() };
        `;

        this.#scope.append( figure );

        setTimeout( () => {
            const getFigure = document.getElementById( 'figure' )
            getFigure.remove()
        }, 5000 );
    }
}