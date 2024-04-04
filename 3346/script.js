var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B] = entrada.split(" ");

a = parseFloat(A);

b = parseFloat(B);

let flut = ((((1.0 + a/100.00) * (1.0 + b/100.00)) - 1.0) * 100.0)

console.log(flut.toFixed(6))