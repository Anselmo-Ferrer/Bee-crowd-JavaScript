var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

while (true) {
     let x = parseInt(prompt())

     if (x === 2002) {
          console.log('Acesso Permitido')
          break;
     }
     
     
     else {
         console.log('Senha Invalida')
     }
}

