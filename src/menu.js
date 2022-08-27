import { Menu } from './core/menu.js'
import { Module } from "@/core/module.js";

export class ContextMenu extends Menu {
    constructor( selector ) {
        super( selector );

        /* Вытаскиваем body, для того чтобы везде было одно косание, а не два, в больших проектах это очени сильно
         влияет на производительность */
        this.scope = document.querySelector( 'body' );

        // Функция которая не позволит контекстному меню выйти за пределы экрана
        this.normalizePozition = ( mouseX, mouseY ) => {
            // Достаем контекстное меню
            const { el: contextMenu } = this;

            // Высчитываем каково положение мыши относительно элемента контейнера (области видимости)
            const {
                left: scopeOffsetX,
                top: scopeOffsetY,
            } = this.scope.getBoundingClientRect();

            const scopeX = mouseX - scopeOffsetX;
            const scopeY = mouseY - scopeOffsetY;

            //  Проверяем не вышел ли элемент за пределы области видимости
            const outOfBoundsOnX =
                scopeX + contextMenu.clientWidth > this.scope.clientWidth;
            const outOfBoundsOnY =
                scopeY + contextMenu.clientHeight > this.scope.clientHeight;

            let normalizedX = mouseX;
            let normalizedY = mouseY;

            // Нормализируем X
            if ( outOfBoundsOnX ) {
                normalizedX =
                    scopeOffsetX + this.scope.clientWidth - contextMenu.clientWidth;
            }

            // Нормализируем  Y
            if ( outOfBoundsOnY ) {
                normalizedY =
                    scopeOffsetY + this.scope.clientHeight - contextMenu.clientHeight;
            }

            // Возвразаем нормализированные значения
            return { normalizedX, normalizedY };
        };
        // При клике правой кнопкой мыши в пределах body вызываем метод open, чтобы открыть контекстное меню
        this.scope.addEventListener( "contextmenu", ( event ) => this.open( event ) );
    }

    // Метод open нужен для открытия контекстного меню
    open( event ) {
        event.preventDefault();

        const { el: contextMenu } = this; // Достаем контекстное меню
        const { offsetX: mouseX, offsetY: mouseY } = event; // Достаем координаты мыши
        const { normalizedX, normalizedY } = this.normalizePozition( mouseX, mouseY ); // Достаем нормализованные значения

        // Задаем позицию контекстному меню
        contextMenu.style.top = `${ normalizedY }px`;
        contextMenu.style.left = `${ normalizedX }px`;

        // Удаляем класс, а потом добавляем его через setInterval для того, чтобы была анимация которую мы писали через css
        contextMenu.classList.remove( "open" );

        setTimeout( () => contextMenu.classList.add( "open" ), 1 );
    }

    // Метод close нужен для закрытия контекстного меню
    close() {
        const { el: menu } = this; // Достаем контекстное меню
        menu.classList.remove( "open" ); // Удаляем ему класс open(Без этого класса модальное окно пропадает)
    }

    // Метод add нужен для добавления модулей в контекстное меню
    add( type, text ) {
        const { el: menu } = this; // Достаем контекстное меню
        const module = new Module( type, text ); // Создаем экземпляр класса Module для создания модуля(<li>text</li>)

        // Проверяем является ли module экземпляром класса Module
        if ( module instanceof Module) {
            // И добавляем наш модуль в контекстное меню
            menu.insertAdjacentHTML( "beforeend", module.toHTML() );
        }
    }
}