import './styles.css'
import { ContextMenu } from "@/menu.js";
import { SoundModule } from './modules/sound.module';

const contextMenu = new ContextMenu( ".menu" ); // Создаем контекстное меню
// И добавляем в него пункты
contextMenu.add( "click-analytics", "Аналитика кликов" );
contextMenu.add( "random-figure", "Случайная фигура" );
contextMenu.add( "countdown-timer", "Таймер отсчета" );
contextMenu.add( "random-sound", "Случайный звук" );
contextMenu.add( "random-background", "Случайный фон" );
contextMenu.add( "custom-message", "Случайное сообщение" );

// Достаем меню из HTML
const menu = document.querySelector( '.menu' );

// Используем делегирования событий для модулей
menu.addEventListener( "click", ( event ) => {
    // Находим data-атрибут нажатого модуля
    const targetModule = event.target.closest( ".menu-item" ).dataset;
    // Удаляем класс open у контекстного меню
    menu.classList.remove("open");

    switch ( targetModule.type ) {
        case "random-sound":
            const module = new SoundModule('click-sound', 'Случайный звук');
            module.trigger();
            return;
        default:
            return;
    }
} );