var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let tempo = parseInt(prompt('Dias'))

let anos = parseInt(tempo / 365)
console.log(`${anos} ano(s)`)
tempo = tempo % 365

let mes = parseInt(tempo / 30)
console.log(`${mes} mes(es)`)
tempo = tempo % 30

console.log(`${tempo} dia(s)`)

