var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C] = entrada.split(" ");

A = parseFloat(A);

B = parseFloat(B);

C = parseFloat(C);

let X = parseFloat(A)

if (C>B && C>A) {
    A = C
    C = X
}

else if (B>C & B>A) {
    A = B
    B = X
}

else {
    A = A
}


if (A >= B+C) {
    console.log(`NAO FORMA TRIANGULO`)
}

else {
    if ((A*A) == ((B*B)+(C*C))) {
        console.log(`TRIANGULO RETANGULO`)
    }
    
    if ((A*A) > ((B*B)+(C*C))) {
        console.log(`TRIANGULO OBTUSANGULO`)
    }
    
    if ((A*A) < ((B*B)+(C*C))) {
        console.log(`TRIANGULO ACUTANGULO`)
    }
    
    if (A == B && A == C) {
        console.log(`TRIANGULO EQUILATERO`)
    }
    
    if ((A==B && A != C) || (A==C && A != B) || (C==B && C != A)) {
        console.log(`TRIANGULO ISOSCELES`)
    }
}
