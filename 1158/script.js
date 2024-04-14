var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let c = parseInt(prompt())

for (let i = 0; i < c; i++) {
    var entrada = prompt("XXXXX");

    var [a,b] = entrada.split(" ");
    
    a = parseInt(a);
    
    b = parseInt(b);

    let soma = 0;

    for (let d = a; d < a+(2*b); d++) {
        if (d%2 !== 0) {
            soma += d
        }
    }


    console.log(soma)
}
