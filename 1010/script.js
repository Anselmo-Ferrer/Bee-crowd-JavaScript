var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines[0].split(' ').map(e => parseFloat(e));
let [D, E, F] = lines[1].split(' ').map(e => parseFloat(e));

let total = (B * C) + (E * F)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)


