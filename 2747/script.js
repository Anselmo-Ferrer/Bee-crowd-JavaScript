var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let str1 = ''
let str2 = ''

for (let i = 1; i <= 39; i++) {

    str1 += '-'

    if (i === 1 || i === 39) {
        str2 += '|'
    }

    else {
        str2 += ' '
    }
}

console.log(str1)
console.log(str2)
console.log(str2)
console.log(str2)
console.log(str2)
console.log(str2)
console.log(str1)
