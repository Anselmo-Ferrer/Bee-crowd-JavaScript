var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let soma = 0

for (let i = 1; i <= 5; i++) {
    let x = parseInt(prompt())
    if ( x % 2 === 0) {
        soma += 1
    }
}

console.log(`${soma} valores pares`)
