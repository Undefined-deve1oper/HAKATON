import './styles.css'
import { ContextMenu } from "@/menu.js";
import { ClicksModule } from "./modules/clicks.module.js"
import { BackgroundModule } from "./modules/background.module.js"

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
        case "click-analytics":
            let module1 = new ClicksModule("click-session", "Подсчет кликов");
            module1.trigger();
            return;
        case "random-background":
            let module2 = new BackgroundModule("change-background", "Случайный фон");
            module2.trigger();
            return;
        default:
            return;
    }
} );