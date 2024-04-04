var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let tempo = parseInt(prompt('Tempo: '))
let velocidade = parseInt(prompt('Velocidade: '))

let total = ((velocidade / 12) * tempo )

console.log(total.toFixed(3))