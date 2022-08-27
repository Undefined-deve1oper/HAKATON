import './styles.css'
import { ContextMenu } from "@/menu";

const menu = new ContextMenu( ".menu" ); // Создаем контекстное меню
// И добавляем в него пункты
menu.add( "click-analytics", "Аналитика кликов" );
menu.add( "random-figure", "Случайная фигура" );
menu.add( "countdown-timer", "Таймер отсчета" );
menu.add( "random-sound", "Случайный звук" );
menu.add( "random-background", "Случайный фон" );
menu.add( "custom-message", "Случайное сообщение" );
menu.add( "exist", "Выход" );