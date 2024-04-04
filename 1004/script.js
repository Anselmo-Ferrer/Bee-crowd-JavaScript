var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let a = parseInt(prompt('A'))
let b = parseInt(prompt('B'))

let PROD = a * b

console.log(`PROD = ${PROD}`)