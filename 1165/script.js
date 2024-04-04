var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let soma = 0

let x = parseInt(prompt('numero de casos: '))

for (let i = 1; i <= x; i++){ 

    let valor = parseInt(prompt('valor: '))



    for (let i = 1; i <= valor; i++) {

        if (valor%i === 0) {
            soma += 1
        }

    }

    if (soma === 2) {
        console.log(`${valor} eh primo`)
    }
    
    else {
        console.log(`${valor} nao eh primo`)
    }

    soma = 0

}
