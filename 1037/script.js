var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let valor = parseFloat(prompt('Escreva um valor: '))

if (valor >= 0 && valor <= 25.00 ) {
    console.log(`Intervalo [0,25]`)
}

else if (valor > 25 && valor <= 50.00 ) {
    console.log(`Intervalo (25,50]`)
}

else if (valor > 50 && valor <= 75.00 ) {
    console.log(`Intervalo (50,75]`)
}

else if (valor > 75 && valor <= 100.00 ) {
    console.log(`Intervalo (75,100]`)
}

else {
    console.log(`Fora de intervalo`)
}
