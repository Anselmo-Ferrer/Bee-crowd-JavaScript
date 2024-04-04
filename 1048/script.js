var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let salario = parseFloat(prompt('Digite seu salario: '))

if (salario >= 0.00 && salario <= 400.00 ) {
    console.log(`Novo salario: ${(salario * 1.15).toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.15).toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
}

else if (salario >= 400.01 && salario <= 800.00 ) {
    console.log(`Novo salario: ${(salario * 1.12).toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.12).toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
}

else if (salario >= 800.01 && salario <= 1200.00 ) {
    console.log(`Novo salario: ${(salario * 1.10).toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.10).toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
}

else if (salario >= 1200.01 && salario <= 2000.00 ) {
    console.log(`Novo salario: ${(salario * 1.07).toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.07).toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
}

else {
    console.log(`Novo salario: ${(salario * 1.04).toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.04).toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}