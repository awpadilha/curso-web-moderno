// é possível ter duas variaveis iguais no mesmo programa desde que estejam em escopos diferentes, isso quando estão em funções diferentes
// no exemplo abaixo o var é subscrito por 2, pois ele assume o segundo valor do escopo global declarado pela variável

var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

