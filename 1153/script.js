var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let soma = 1;

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {
    soma *= i
    
}

console.log(soma)
