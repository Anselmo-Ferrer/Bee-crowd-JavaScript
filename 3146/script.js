var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let raio = parseFloat(prompt('Raio'))
const pi = 3.14

let circu = 2 * pi * raio

console.log(circu.toFixed(2))


