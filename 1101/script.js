var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

while (true) {

    var entrada = prompt("XXXXX");
    
    var [a,b] = entrada.split(" ");
    
    a = parseInt(a);
    
    b = parseInt(b);
    
    let c = a
    let soma = 0
    let result = ""

    if (b > a) {
        a = b
        b = c
    }

    if (a <= 0 || b <= 0) {
        break;
    }

    for (let i = b; i <= a; i++) {
        soma += i
        
        result += i + " "

    }

    if (soma >= 1) {
        console.log(`${result}Sum=${soma}`)
    }
}