var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [N,L] = entrada.split(" ");

N = parseInt(N);
L = parseInt(L);

let total = N*L

console.log(total)
