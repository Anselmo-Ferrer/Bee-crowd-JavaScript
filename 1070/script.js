var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = x; i <= x+11; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
