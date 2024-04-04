var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C] = entrada.split(" ");

A = parseInt(A);

B = parseInt(B);

C = parseInt(C);

if (A>B && A>C && B>C) {
    console.log(`${C}\n${B}\n${A}`)
}

else if (A>B && A>C && C>B) {
    console.log(`${B}\n${C}\n${A}`)
}

else if (B>A && B>C && A>C) {
    console.log(`${C}\n${A}\n${B}`)
}

else if (B>A && B>C && C>A) {
    console.log(`${A}\n${C}\n${B}`)
}

else if (C>A && C>B && A>B) {
    console.log(`${B}\n${A}\n${C}`)
}

else if (C>A && C>B && B>A) {
    console.log(`${A}\n${B}\n${C}`)
}

else {
    console.log(`erro`)
}

console.log(`\n${A}\n${B}\n${C}`)