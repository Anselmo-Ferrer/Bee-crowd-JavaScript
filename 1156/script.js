var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let soma = 0
let x = 1

for (let i = 1; i <= 39; i += 2) {
    soma += i/x
    x *= 2
}

console.log(soma.toFixed(2))
