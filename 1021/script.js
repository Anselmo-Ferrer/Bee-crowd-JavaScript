var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let valor = parseFloat(prompt())

console.log(`NOTAS:`)

let quantidade = valor / 100
console.log(`${parseInt(quantidade)} nota(s) de R$ 100.00`)
valor = valor % 100;

quantidade = valor / 50
console.log(`${parseInt(quantidade)} nota(s) de R$ 50.00`)
valor = valor % 50;

quantidade = valor / 20
console.log(`${parseInt(quantidade)} nota(s) de R$ 20.00`)
valor = valor % 20;

quantidade = valor / 10
console.log(`${parseInt(quantidade)} nota(s) de R$ 10.00`)
valor = valor % 10;

quantidade = valor / 5
console.log(`${parseInt(quantidade)} nota(s) de R$ 5.00`)
valor = valor % 5;

quantidade = valor / 2
console.log(`${parseInt(quantidade)} nota(s) de R$ 2.00`)
valor = valor % 2;

console.log(`MOEDAS:`)

quantidade = valor / 1
console.log(`${parseInt(quantidade)} moeda(s) de R$ 1.00`)
valor = valor % 1;

quantidade = valor / 0.5
console.log(`${parseInt(quantidade)} moeda(s) de R$ 0.50`)
valor = valor % 0.5;

quantidade = valor / 0.25
console.log(`${parseInt(quantidade)} moeda(s) de R$ 0.25`)
valor = valor % 0.25;

quantidade = valor / 0.10
console.log(`${parseInt(quantidade)} moeda(s) de R$ 0.10`)
valor = valor % 0.10;

quantidade = valor / 0.05
console.log(`${parseInt(quantidade)} moeda(s) de R$ 0.05`)
valor = valor % 0.05 + 0.0001;

quantidade = valor / 0.01
console.log(`${parseInt(quantidade)} moeda(s) de R$ 0.01`)

