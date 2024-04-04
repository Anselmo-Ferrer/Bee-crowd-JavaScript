var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {

    var entrada = prompt("XXXXX");

    var [A,B] = entrada.split(" ");

    A = parseInt(A);
    B = parseInt(B);

    if ( B === 0) {
        console.log('divisao impossivel')
    }

    else {
        console.log(`${(A/B).toFixed(1)}`)
    }
}
