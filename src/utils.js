export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// export function generateColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }
export function generateColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
