var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let nome = prompt('Nome:')
let salario = parseFloat(prompt('Salario:'))
let vendas = parseFloat(prompt('Vendas: '))

let total = (salario + (vendas * 0.15))

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
