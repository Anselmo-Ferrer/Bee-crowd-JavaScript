var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 1; i <= x*4; i += 4) {
    console.log(`${i} ${i+1} ${i+2} PUM`)
}
