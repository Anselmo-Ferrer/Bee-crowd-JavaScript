var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines[0].split(' ').map(e => parseInt(e));

maiorAB = (A+B + Math.abs(A-B)) / 2
maiorABC = (C + maiorAB + Math.abs(C-maiorAB)) / 2

console.log(`${maiorABC} eh o maior`)