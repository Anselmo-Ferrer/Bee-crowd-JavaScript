var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())
let y = parseInt(prompt())

let soma = 0

for (let i = y+1; i < x; i++) {
   if (i%2 !== 0) {
    soma += i
   }
}

console.log(soma)
