var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let tempo = parseInt(prompt('tempo(s)'))

let horas = parseInt(tempo / 3600)
tempo = tempo % 3600

let min = parseInt(tempo / 60)
tempo = tempo % 60

console.log(`${horas}:${min}:${tempo}`)
