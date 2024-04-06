var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = -2

for (let j = 60; j >= 0; j -= 5) {
    i += 3
    console.log(`I=${i} J=${j}`)
}