const escola = "Cod3r"

console.log(escola.charAt(4)) // Vai pegar o 4 elemento
console.log(escola.charAt(5)) // Vai pegar o 5 elemento, no caso é inexistente
console.log(escola.charCodeAt(3)) // Pega o código Unicode, referenciado ao número 3 em html
console.log(escola.indexOf('3')) // indice assocoado ao digito 3

console.log(escola.substring(1)) // Vai tirar o primeiro item
console.log(escola.substring(0 , 3)) // Vai de zero até três sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!")) // Concatena a palavra Escola, com a constante e exclamação
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // Vai substituir o numeral 3 por E na constante

console.log('Ana,Maria,Pedro'.split(',')) // Vai trasnformar tudo em um array
