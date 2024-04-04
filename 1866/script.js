var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {
    let valor = parseInt(prompt())

    if (valor % 2 === 1) {
        console.log(`1`)
    }
    else {
        console.log(`0`)
    }
}