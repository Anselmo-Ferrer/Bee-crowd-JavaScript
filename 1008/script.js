var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let numero = parseInt(prompt('Numero'))
let horas = parseInt(prompt('Horas'))
let valor = parseFloat(prompt('valor'))

let salario = (horas * valor)

console.log(`NUMBER = ${numero}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
