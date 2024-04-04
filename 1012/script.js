var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C] = entrada.split(" ");

A = parseFloat(A);

B = parseFloat(B);

C = parseFloat(C);


const pi = 3.14159

let triangulo = (A*C) / 2
let circulo = pi * (C * C)
let trapezio = (A+B) * C / 2
let quadrado = B * B
let retangulo = A * B

console.log('TRIANGULO: ' + triangulo.toFixed(3))
console.log('CIRCULO: ' + circulo.toFixed(3))
console.log('TRAPEZIO: ' + trapezio.toFixed(3))
console.log('QUADRADO: ' + quadrado.toFixed(3))
console.log('RETANGULO: ' + retangulo.toFixed(3))