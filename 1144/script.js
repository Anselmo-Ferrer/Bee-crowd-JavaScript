var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {
    console.log(`${i} ${i*i} ${i*i*i}`)
    console.log(`${i} ${i*i+1} ${i*i*i+1}`)
}
