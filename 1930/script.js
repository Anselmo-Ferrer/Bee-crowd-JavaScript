var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [t1,t2,t3,t4] = entrada.split(" ");

t1 = parseInt(t1);
t2 = parseInt(t2);
t3 = parseInt(t3);
t4 = parseInt(t4);

let total = (t1+t2+t3+t4) - 3

console.log(total)

