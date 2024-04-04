var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let coluna = prompt('Coluna').toLowerCase()
let tipo = prompt('tipo').toLowerCase()
let comida = prompt('Comida').toLowerCase()

if (coluna === 'vertebrado') {
    if (tipo === 'ave') {
        if (comida === 'carnivoro') {
            console.log('aguia')
        }

        else if (comida == 'onivoro') {
            console.log('pomba')
        }

        else {
            console.log('Opcao de comida errada')
        }
    }

    else if (tipo === 'mamifero') {
        if (comida === 'onivoro') {
            console.log('homem')
        }
        
        else if (comida == 'herbivoro') {
            console.log('vaca')
        }

        else {
            console.log('Opcao de comida errada')
        }
    }

    else {
        console.log('opcao de tipo errado')
    }
}

else if (coluna === 'invertebrado' ) {
    if (tipo === 'inseto') {
        if (comida === 'hematofago') {
            console.log('pulga')
        }

        else if (comida == 'herbivoro') {
            console.log('lagarta')
        }

        else {
            console.log('Opcao de comida errada')
        }
    }

    else if (tipo === 'anelideo') {
        if (comida === 'hematofago') {
            console.log('sanguessuga')
        }
        
        else if (comida == 'onivoro') {
            console.log('minhoca')
        }

        else {
            console.log('Opcao de comida errada')
        }
    }

    else {
        console.log('opcao de tipo errado')
    }
}

else {
    console.log('Opcao de coluna errada')
}
