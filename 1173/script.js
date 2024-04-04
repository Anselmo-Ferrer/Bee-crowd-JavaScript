var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${x}`)
    x *= 2
}
