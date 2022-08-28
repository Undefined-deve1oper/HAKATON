import { random } from '../../src/utils' // импорт функции случайного значения
import { generateColor } from '../../src/utils' // импорт функции случайного цвета
import { Module } from '../core/module' // имподрт родительского класса

export class RandomFigure extends Module {
  //создаем дочерний класс
  constructor(type, text) {
    //инициализация начальных значений
    super(type, text)
  }
  trigger() {
    // добавление логики в метод
    const getBody = document.querySelector('body') // доступ к body
    let rand = random(1, 9) // переменаня с рандомным значением фигур
    const pageWidth = document.documentElement.scrollWidth - 300 // определение ширины экрана
    const pageHeight = document.documentElement.scrollHeight - 200 //определение высоты экрана

    if (rand === 1) {
      // отрисовка фигур в зависимости от выпашего рандомного значения, удаление фигуры по истечении 5ти секунд
      const square = document.createElement('div')
      square.style = `width: 100px; height: 100px; background: ${generateColor()}; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      square.id = 'figure'
      getBody.append(square)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 2) {
      const triangleRight = document.createElement('div')
      triangleRight.style = `width: 0; height: 0; border-top: 50px solid transparent; border-left: 100px solid ${generateColor()}; border-bottom: 50px solid transparent; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      triangleRight.id = 'figure'
      getBody.append(triangleRight)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 3) {
      const oval = document.createElement('div')
      oval.style = `width: 200px; height: 100px; background: ${generateColor()}; border-radius: 100px / 50px; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      oval.id = 'figure'
      getBody.append(oval)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 4) {
      const circle = document.createElement('div')
      circle.style = `width: 100px; height: 100px; background: ${generateColor()}; border-radius: 50px; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      circle.id = 'figure'
      getBody.append(circle)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 5) {
      const rectangle = document.createElement('div')
      rectangle.style = `width: 200px; height: 100px; background: ${generateColor()}; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      rectangle.id = 'figure'
      getBody.append(rectangle)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 6) {
      const pacman = document.createElement('div')
      pacman.style = `width: 0; 
      height: 0;
      border-right: 60px solid transparent;
      border-top: 60px solid #F4B915;
      border-left: 60px solid #F4B915;
      border-bottom: 60px solid #F4B915;
      border-top-left-radius: 60px;
      border-top-right-radius: 60px;
      border-bottom-left-radius: 60px;
      border-bottom-right-radius: 60px; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      pacman.id = 'figure'
      getBody.append(pacman)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 7) {
      const crescent = document.createElement('div')
      crescent.style = `width: 100px; 
      height: 100px; 
      margin: -20px 0 20px 0;
      border-radius: 50%;
      box-shadow: 15px 15px 0 0 ${generateColor()}; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      crescent.id = 'figure'
      getBody.append(crescent)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 8) {
      const segment = document.createElement('div')
      segment.style = `width: 0; 
      height: 0;
      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
      border-top: 110px solid ${generateColor()};
      border-radius: 50%; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      segment.id = 'figure'
      getBody.append(segment)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    } else if (rand === 9) {
      const petal = document.createElement('div')
      petal.style = `width: 5em; 
      height: 5em; 
      margin: 1em 1em;
      background: ${generateColor()};
      border-radius: 100% 0; position: absolute; right: ${random(
        0,
        pageWidth
      )}px; top: ${random(0, pageHeight)}px;`
      petal.id = 'figure'
      getBody.append(petal)
      setTimeout(() => {
        const getFigure = document.getElementById('figure')
        getFigure.remove()
      }, 5000)
    }
  }
}
