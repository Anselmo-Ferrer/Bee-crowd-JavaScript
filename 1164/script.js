var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 0; i < x; i++) {
    let valor = parseInt(prompt())

    let div = 0


    for (let z = 0; z < valor; z++) {

        if (valor % z === 0) {
            div += z
        }
    }

    if (div === valor) {
        console.log(`${valor} eh perfeito`)
    }

    else {
        console.log(`${valor} nao eh perfeito`)
    }

}