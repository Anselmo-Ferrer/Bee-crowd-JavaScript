var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

let form = ((((1 + Math.sqrt(5)) / 2)**x) - (((1 - Math.sqrt(5)) / 2)**x)) / Math.sqrt(5)

console.log(form.toFixed(1))
