var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let A = parseFloat(prompt('A')).toFixed(1)
let B = parseFloat(prompt('B')).toFixed(1)

let media = ((A * 3.5) + (B * 7.5)) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)