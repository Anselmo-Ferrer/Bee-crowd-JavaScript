var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

while (true) {
    
    var entrada = prompt("XXXXX");

    var [A,B] = entrada.split(" ");

    A = parseInt(A);
    B = parseInt(B);

    if (A > B) {
        console.log(`Decrescente`)
    }

    else if (A < B) {
        console.log(`Crescente`)
    }

    else {
        break;
    }

}
