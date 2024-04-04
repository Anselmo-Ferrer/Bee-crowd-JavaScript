var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let maior = -999999999999
let pos;

for (let i = 1; i <= 100; i++) {
    let x = parseInt(prompt())

    if (x > maior) {
        maior = x
        pos = i
    }
}

console.log(maior)
console.log(pos)
