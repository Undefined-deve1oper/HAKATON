export function random( max ) {
    return Math.floor( Math.random() * max )
}

export function getRandomArrayElement( array ) {
    const randomIndex = Math.floor( Math.random() * array.length );
    return array[randomIndex];
}

export function getRandomColor() {
    // Создаем переменную letters в которой текст из которого мы будем делать цвет
    const letters = "0123456789ABCDEF";
    let color = "#"; // Создаем переменную color куда будем подставлять значение

    // Создаем цикл и создаем рандомный цвет
    for ( let i = 0; i < 6; i++ ) {
        color += letters[Math.floor( Math.random() * 16 )];
    }
    // возвращаем цвет
    return color;
}