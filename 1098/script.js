var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0
let j = 1

for (let x = 1; x <= 11; x++) {
    console.log(`I=${Math.floor(i * 10) / 10} J=${Math.floor(j * 10) / 10}`)
    console.log(`I=${Math.floor(i * 10) / 10} J=${Math.floor((j+1) * 10) / 10}`)
    console.log(`I=${Math.floor(i * 10) / 10} J=${Math.floor((j+2) * 10) / 10}`)
    i += 0.20001
    j += 0.20001
}