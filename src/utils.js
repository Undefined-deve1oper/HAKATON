export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
