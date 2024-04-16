var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [x,y] = entrada.split(" ");

x = parseInt(x);
y = parseInt(y);

let soma = 0
let numeros = ""

for (let i = 1; i <= y; i++) {
    
    soma++
    numeros += i

    if (i%x !== 0) {
        numeros += ' '
    }

    if (soma === x) {
    console.log(numeros)
    soma = 0
    numeros = ""
    }
}
