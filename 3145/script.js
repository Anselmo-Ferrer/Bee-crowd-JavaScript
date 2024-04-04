var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B] = entrada.split(" ");

A = parseInt(A);

B = parseInt(B);

let total = B / (A + 2)

console.log(total.toFixed(2))

