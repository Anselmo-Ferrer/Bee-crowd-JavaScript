var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let distancia = parseInt(prompt('Distancia: '))
let combustivel = parseFloat(prompt('Combustivel gasto:')).toFixed(1)

let total = (distancia / combustivel)

console.log(`${total.toFixed(3)} km/l`)
