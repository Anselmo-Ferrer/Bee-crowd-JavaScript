var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let str1 = '' // 39 barras deitadas
let str2 = '' // barras laterais em branco

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
console.log('|x = 35                               |')
console.log(str2)
console.log('|               x = 35                |')
console.log(str2)
console.log('|                               x = 35|')
console.log(str1)
