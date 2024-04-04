var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B] = entrada.split(" ");

A = parseInt(A);

B = parseInt(B);

if (A === 1) {
    console.log(`Total: R$ ${(4*B).toFixed(2)}`)
}

else if (A === 2) {
    console.log(`Total: R$ ${(4.5*B).toFixed(2)}`)
}

else if (A === 3) {
    console.log(`Total: R$ ${(5*B).toFixed(2)}`)
}

else if (A === 4) {
    console.log(`Total: R$ ${(2*B).toFixed(2)}`)
}

else if (A === 5) {
    console.log(`Total: R$ ${(1.5*B).toFixed(2)}`)
}

else {
    console.log(`erro`)
}