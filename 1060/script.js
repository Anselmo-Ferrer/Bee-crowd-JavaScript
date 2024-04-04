var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let soma = 0

for (let i = 1; i <= 6; i++) {
     let valor = parseInt(prompt())

     if (valor > 0) {
          soma += 1
     }
}

console.log(`${soma} valores positivos`)
