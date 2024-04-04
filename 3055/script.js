var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let a = parseInt(prompt('valorA'))
let m = parseInt(prompt('Media'))

let b = (2*m) - a

console.log(b)

