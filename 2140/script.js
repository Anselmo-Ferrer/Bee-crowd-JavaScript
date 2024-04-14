var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 var prompt = function(texto) { return lines.shift();};


while (true) {

    var entrada = prompt("XXXXX");
    
    var [a,b] = entrada.split(" ");
    
    a = parseInt(a);
    
    b = parseInt(b);
    
    if (a === 0 || b === 0) {
         break;
    }
    
    let troco = b-a
    
    if (troco === 7 || troco === 12 || troco === 22 || troco === 52 || troco === 102 || troco === 15 || troco === 25 || troco === 55 || troco === 105 || troco === 30 || troco === 60 || troco === 110 || troco === 70 || troco === 120 || troco === 150 || troco === 200 || troco === 100 || troco === 40 || troco === 20 || troco === 10 || troco === 4 ) {
         console.log('possible')
    }
    
    else {
         console.log('impossible')
    }

}
