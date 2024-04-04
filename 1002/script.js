var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let raio = parseFloat(prompt('Raio')).toFixed(2)

const pi = 3.14159

let area = pi * (raio * raio)

console.log(`A=${area.toFixed(4)}`)