var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();}; 

let x = parseInt(prompt())


for (let i = 1; i <= x; i++) {
    let valor = parseInt(prompt())

    if (valor % 2 === 0 && valor > 0) {
        console.log(`EVEN POSITIVE`)
    }

    else if ( valor % 2 === 0 && valor < 0) {
        console.log(`EVEN NEGATIVE`)
    }

    else if (valor % 2 === 1 && valor > 0) {
        console.log(`ODD POSITIVE`)
    }

    else if ( valor % 2 !== 0 && valor < 0) {
        console.log(`ODD NEGATIVE`)
    }

    else {
        console.log(`NULL`)
    }
    
}