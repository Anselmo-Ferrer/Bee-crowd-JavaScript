var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let idades = 0
let soma = 0

while (true) {
    let x = parseInt(prompt())

    if (x < 0) {
        break;
    }

    idades += x
    soma += 1
}

console.log(`${(idades/soma).toFixed(2)}`)
