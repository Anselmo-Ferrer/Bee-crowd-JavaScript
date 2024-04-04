var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let media = 0
let soma = 0

while (true) {
    let x = parseFloat(prompt('Digite a nota:'))

    if (x >= 0 && x <= 10) {
        media += x
        soma += 1

    }

    else {
        console.log('nota invalida')
    }
    

    if (soma === 2) {

        console.log(`media = ${(media/soma).toFixed(2)}`)

        console.log('novo calculo (1-sim 2-nao)')
        let n = parseInt(prompt('1/2'))

        while (n !== 1 && n !== 2) {
            console.log('novo calculo (1-sim 2-nao)')
            n = parseInt(prompt('1/2'))
        }

        if (n === 2) {
            break;
        }

        else {
            media = 0
            soma = 0
        }
    }

}