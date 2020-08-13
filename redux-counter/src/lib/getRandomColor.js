export default function getRandomColor() {
    const colors = [
        'red',
        'blue',
        'yellow',
        'green'
    ];

    const random = Math.floor(Math.random() * colors.length);

    return colors[random];
}