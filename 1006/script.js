var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let a = parseFloat(prompt('A')).toFixed(1)
let b = parseFloat(prompt('B')).toFixed(1)
let c = parseFloat(prompt('C')).toFixed(1)

let media = ((a*2) + (b*3) + (c*5)) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)