var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt('A'))
let z = parseInt(prompt('Z'))

while (z <= x) {
    z = parseInt(prompt('Z'))
}

let soma = 0
let total = 0

for (let i = x; i <= x+12; i++) {
    
    soma += i
    total++

    if (soma > z) {
        break;
    }
}

console.log(total)
