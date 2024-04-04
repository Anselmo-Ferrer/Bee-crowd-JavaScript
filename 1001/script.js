var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let A = parseInt(prompt('valor A: '))
let B = parseInt(prompt('valor B: '))

let X = A + B

console.log(`X = ${X}`)