var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C] = entrada.split(" ");

A = parseFloat(A);

B = parseFloat(B);

C = parseFloat(C);


let total;

if (A>B && A>C) {
    if (B+C > A) {
        total = A+B+C
        console.log(`Perimetro = ${total.toFixed(1)}`)
    }
    else {
        total = ((A+B) * C) / 2
        console.log(`Area = ${total.toFixed(1)}`)
    }
}

else if (B>A && B>C) {
    if (A+C > B) {
        total = A+B+C
        console.log(`Perimetro = ${total.toFixed(1)}`)
    }
    else {
        total = ((A+B) * C) / 2
        console.log(`Area = ${total.toFixed(1)}`)
    }
}

else if (C>A && C>B) {
    if (A+B > C) {
        total = A+B+C
        console.log(`Perimetro = ${total.toFixed(1)}`)
    }
    else {
        total = ((A+B) * C) / 2
        console.log(`Area = ${total.toFixed(1)}`)
    }
}

else {
    total = A+B+C
    console.log(`Perimetro = ${total.toFixed(1)}`)
}