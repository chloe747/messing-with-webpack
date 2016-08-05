// shamelessly stolen from
// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
export default function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
