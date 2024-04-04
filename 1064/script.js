var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let soma = 0
let media = 0

for (let i = 1; i <= 6; i++) {
    let x = parseFloat(prompt('nota:'))

    if (x > 0) {
        media += x
        soma += 1
    }

}

console.log(`${soma} valores positivos`)
console.log((media/soma).toFixed(1))
