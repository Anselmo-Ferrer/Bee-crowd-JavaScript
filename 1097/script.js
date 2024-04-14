var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1
let j = 7

for (let x = 1; x <= 5; x++) {
    console.log(`I=${i} J=${j}`)
    console.log(`I=${i} J=${j-1}`)
    console.log(`I=${i} J=${j-2}`)
    i += 2
    j += 2
}
