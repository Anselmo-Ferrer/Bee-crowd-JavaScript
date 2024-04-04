var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let alcool = 0
let gasolina = 0
let diesel = 0

while (true) {
    let x = parseInt(prompt())
    if (x === 1) {
        alcool += 1
    }
    else if (x === 2) {
        gasolina += 1
    }
    else if (x === 3) {
        diesel += 1
    }

    if (x ===4) {
        break;
    }
}

console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)
