var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let [T] = lines[0].split(' ').map(e => parseInt(e));
let [A, B, C, D, E] = lines[1].split(' ').map(e => parseInt(e));

let soma = 0;

if (T === A) {
    soma++
}

if (T === B) {
    soma++
}

if (T === C) {
    soma++
}

if (T === D) {
    soma++
}

if (T === E) {
    soma++
}

console.log(soma)