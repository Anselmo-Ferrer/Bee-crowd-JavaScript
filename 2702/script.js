var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let [A, B, C] = lines[0].split(' ').map(e => parseInt(e));
let [D, E, F] = lines[1].split(' ').map(e => parseInt(e));

if (A > D) {
    A=0
    D=0
}

if (B > E) {
    B=0
    E=0
}

if (C > F) {
    C=0
    F=0
}

let totaltudo = (D-A) + (E-B) + (F-C)

console.log(totaltudo)
