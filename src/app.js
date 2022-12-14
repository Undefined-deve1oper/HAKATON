import './styles.css'
import { ContextMenu } from "@/menu.js";
import { ClicksModule } from "./modules/clicks.module.js"
import { BackgroundModule } from "./modules/background.module.js"
import { MessageModule } from "@/modules/message.module.js";
import { RandomFigure } from "@/modules/random-figure.module.js";
import { SoundModule } from "@/modules/sound.module.js";
import { TimerModule } from "@/modules/timer.module.js";

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
    const targetModule = event.target.closest( ".menu-item" );
    const targetModuleData = targetModule?.dataset;

    // Делаем кнопку не активной
    Array.from( menu.children ).forEach( ( module ) => {
        switch ( module?.dataset.type ) {
            case "random-figure":
            case "random-background":
                break;
            default:
                module.classList.add( "disabled" );
                break;
        }
        // Через 5 сек опять делаем активным
        setTimeout( () => module.classList.remove( "disabled" ), 5000 );
    } );

    // Проверяем существует ли targetModule
    if ( targetModule ) {
        // Удаляем класс open у контекстного меню
        menu.classList.remove( "open" );

        switch ( targetModuleData.type ) {
            case "click-analytics":
                let moduleClick = new ClicksModule( "click-session", "Подсчет кликов" );
                moduleClick.trigger();
                return;
            case "random-figure":
                let moduleFigure = new RandomFigure( "random-figure", "Случайная фигура" );
                moduleFigure.trigger();
                return;
            case "random-sound":
                let moduleSound = new SoundModule( "random-sound", "Случайный звука" );
                moduleSound.trigger();
                return;
            case "countdown-timer":
                let moduleTimer = new TimerModule( "countdown-timer", "Таймер отсчета" );
                moduleTimer.trigger();
                return;
            case "custom-message":
                let moduleMessage = new MessageModule( "custom-message", "Случайное сообщение" );
                moduleMessage.trigger();
                return;
            case "random-background":
                let moduleBackground = new BackgroundModule( "change-background", "Случайный фон" );
                moduleBackground.trigger();
                return;
            default:
                return;
        }
    }
} );