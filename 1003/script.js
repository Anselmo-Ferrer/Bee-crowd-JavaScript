var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let A = parseInt(prompt('A'))
let B = parseInt(prompt('B'))

let soma = A + B

console.log(`SOMA = ${soma}`)