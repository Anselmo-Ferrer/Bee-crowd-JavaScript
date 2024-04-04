var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C] = entrada.split(" ");

s = parseInt(A);
t = parseInt(B);
f = parseInt(C);

let total = s+t+f


if (total > 24) {
    console.log(total % 24)
}

else if (total === 24) {
    console.log(`0`)
}

else if (total < 0 ) {
    console.log(total + 24)
}

else {
    console.log(total)
}
