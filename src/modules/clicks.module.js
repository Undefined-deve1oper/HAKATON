import { Module } from '../core/module'

export class ClicksModule extends Module {
    #scope

    constructor( type, text ) {
        super( type, text );
        // Инициализируем привязку this
        this.#scope = document.querySelector( 'body' );
    };

    trigger() {
        // Создаем переменную clickCount в которую будем помещать количество кликов
        let clickCount = -1;
        let seconds = 5;

        // Создаем div для того, чтобы показывать текст "Скорее кликайте у вас осталось 5 сек"
        const timer = document.createElement( "div" );
        timer.classList.add( "timer" );

        timer.innerHTML = `<span>Скорее кликайте.</span><h1>У вас осталось ${ (seconds) } сек</h1>`;
        this.#scope.append( timer );

        const timerInterval = setInterval( () => {
            if ( seconds > 0 ) {
                // Уменьшаем количество секунд
                seconds--;
                // Отрисовываем это в HTML
                timer.innerHTML = `<span>Скорее кликайте.</span><h1>У вас осталось ${ (seconds) } сек</h1>`;
                this.#scope.append( timer );
            } else {
                // Удаляем таймер из HTML
                document.querySelector( ".timer" ).remove();
                // Останавливаем Timer
                clearInterval( timerInterval );
            }
        }, 1000 );

        // Функция handleMouseClick увеличивает клик на 1
        const handleMouseClick = () => clickCount++;

        // При кликах вызываем эту функцию
        this.#scope.addEventListener( 'click', handleMouseClick );
        this.#scope.addEventListener( 'dblclick', handleMouseClick );

        setTimeout( () => {
            // Достаем модальное окно и title
            const clickPopup = document.querySelector( '#popup_click' );
            const clickPopupTitle = clickPopup.querySelector( '.popup__title' );

            // Добавляем класс open чтобы открылось модальное окно и выводим количество кликов
            clickPopup.classList.add( "open" );
            clickPopupTitle.textContent = `Ты успел кликнуть ${ clickCount } раз(а). Сможешь больше ?)`;

            // Используем делегирования событий
            clickPopup.addEventListener( "click", ( event ) => {
                const { target: targetElement } = event;

                // Если был нажат крестик или черное пространсто, то модальное окно закрывется
                if ( !targetElement.closest( ".popup__content" )
                    || targetElement.closest( "close-popup" ) ) {
                    clickPopup.classList.remove( "open" );
                }
            } );

            // Удаляем обработчики событий на клики
            this.#scope.removeEventListener( 'click', handleMouseClick );
            this.#scope.removeEventListener( 'dblclick', handleMouseClick );
        }, 5000 );
    };
}