var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let distancia = parseInt(prompt('distancia: '))

let total = distancia * 2

console.log(`${total} minutos`)