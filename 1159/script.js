var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

while (true) {
    let a = parseInt(prompt())

    let soma = 0;

    if (a === 0) {
        break;
    }

    for (let b = a; b <= a+9; b++) {
        if (b%2 === 0) {
            soma += b
        }
    }

    console.log(soma)
}
