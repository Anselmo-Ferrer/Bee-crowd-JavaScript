var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())
let y = parseInt(prompt())

let soma = 0;

let a = x

if (x>y) {
    x = y
    y = a
}

for (let i = x; i <= y; i++) {
    if (i%13 !== 0) {
        soma += i
    }
}

console.log(soma)
