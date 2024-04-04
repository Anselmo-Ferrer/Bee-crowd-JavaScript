var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let soma = 0
let media = 0

while (true) {
    let x = parseFloat(prompt())

    if (x >= 0 && x <= 10) {
        media += x
        soma += 1
    }

    else {
        console.log('nota invalida')
    }

    if (soma === 2) {
        break;
    }
}

console.log(`media = ${(media/2).toFixed(2)}`)
