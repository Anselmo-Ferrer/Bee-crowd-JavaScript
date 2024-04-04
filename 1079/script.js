var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {

    var entrada = prompt("XXXXX");

    var [A,B,C] = entrada.split(" ");

    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    let media = ((A*2)+(B*3)+(C*5)) / 10

    console.log(media.toFixed(1))
}
