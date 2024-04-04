var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B] = entrada.split(" ");

A = parseInt(A);

B = parseInt(B);

if (A>=B) {
    let total = (24-A) + B
    console.log(`O JOGO DUROU ${total} HORA(S)`)
}

else {
    total = B-A
    console.log(`O JOGO DUROU ${total} HORA(S)`)
}
