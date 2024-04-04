var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

for (let i = 0; i < 100; i++) {
    let x = parseFloat(prompt())

    if (x <= 10) {
        console.log(`A[${i}] = ${x.toFixed(1)}`)
    }
}
