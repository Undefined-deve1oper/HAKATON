import { random } from '../../src/utils'
import { generateColor } from '../../src/utils'

const pageWidth = document.documentElement.scrollWidth - 300
const pageHeight = document.documentElement.scrollHeight - 200
export function randomBody() {
  const getBody = document.querySelector('body')
  let rand = random(1, 5)

  if (rand === 1) {
    const square = document.createElement('div')
    square.style = `width: 100px; height: 100px; background: ${generateColor()}; transform: translate(${random(
      0,
      pageWidth
    )}px, ${random(0, pageHeight)}px)`
    square.id = 'figure'
    getBody.append(square)
    setTimeout(() => {
      const getFigure = document.getElementById('figure')
      getFigure.remove()
    }, 5000)
  } else if (rand === 2) {
    const triangleRight = document.createElement('div')
    triangleRight.style = `width: 0; height: 0; border-top: 50px solid transparent; border-left: 100px solid ${generateColor()}; border-bottom: 50px solid transparent; transform: translate(${random(
      0,
      pageWidth
    )}px, ${random(0, pageHeight)}px)`
    triangleRight.id = 'figure'
    getBody.append(triangleRight)
    setTimeout(() => {
      const getFigure = document.getElementById('figure')
      getFigure.remove()
    }, 5000)
  } else if (rand === 3) {
    const oval = document.createElement('div')
    oval.style = `width: 200px; height: 100px; background: ${generateColor()}; border-radius: 100px / 50px; transform: translate(${random(
      0,
      pageWidth
    )}px, ${random(0, pageHeight)}px)`
    oval.id = 'figure'
    getBody.append(oval)
    setTimeout(() => {
      const getFigure = document.getElementById('figure')
      getFigure.remove()
    }, 5000)
  } else if (rand === 4) {
    const circle = document.createElement('div')
    circle.style = `width: 100px; height: 100px; background: ${generateColor()}; border-radius: 50px; transform: translate(${random(
      0,
      pageWidth
    )}px, ${random(0, pageHeight)}px)`
    circle.id = 'figure'
    getBody.append(circle)
    setTimeout(() => {
      const getFigure = document.getElementById('figure')
      getFigure.remove()
    }, 5000)
  } else if (rand === 5) {
    const rectangle = document.createElement('div')
    rectangle.style = `width: 200px; height: 100px; background: ${generateColor()}; transform: translate(${random(
      0,
      pageWidth
    )}px, ${random(0, pageHeight)}px)`
    rectangle.id = 'figure'
    getBody.append(rectangle)
    setTimeout(() => {
      const getFigure = document.getElementById('figure')
      getFigure.remove()
    }, 5000)
  }
}
