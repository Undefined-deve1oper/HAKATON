import './styles.css'
import { ContextMenu } from '@/menu'
import { RandomFigure } from './modules/random-figure.module'

const menu = new ContextMenu('.menu') // Создаем контекстное меню
// И добавляем в него пункты
menu.add('click-analytics', 'Аналитика кликов')
menu.add('random-figure', 'Случайная фигура')
menu.add('countdown-timer', 'Таймер отсчета')
menu.add('random-sound', 'Случайный звук')
menu.add('random-background', 'Случайный фон')
menu.add('custom-message', 'Случайное сообщение')
menu.add('exist', 'Выход')

const mainMenu = document.querySelector('#menu')
// Используем делегирования событий для модулей
mainMenu.addEventListener('click', (event) => {
  // Находим data-атрибут нажатого модуля
  const targetModule = event.target.closest('.menu-item').dataset

  // Удаляем класс open у контекстного меню
  mainMenu.classList.remove('open')

  switch (targetModule.type) {
    case 'random-figure':
      const module = new RandomFigure('click-random-figure', 'Случайная фигура')
      module.trigger()
      return
    default:
      return
  }
})
