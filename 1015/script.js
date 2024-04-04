var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines[0].split(' ').map(e => parseFloat(e));
let [x2, y2] = lines[1].split(' ').map(e => parseFloat(e));


let distancia = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));


console.log(distancia.toFixed(4))