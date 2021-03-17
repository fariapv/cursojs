// STRING = CADEIA DE CARACTERES
    // ' ' ou " " ou ` `

const escola = "ETEC"
console.log(escola.charAt(0)) // (0-...)PUXA A LETRA DE ACORDO COM O INDICE
    console.log(escola.charAt(1))
        console.log(escola.charAt(2))
            console.log(escola.charAt(3))

console.log("--------------------------")

console.log(escola.charCodeAt(3)) //unicode
console.log(escola.indexOf('3')) // o contrario do anterior

console.log("--------------------------")

console.log(escola.substring(0, 3)) // PRINTA AS LETRAS NA SEQUENCIA

console.log("--------------------------")

console.log('Escola '.concat(escola, " ").concat("!"))
console.log('Escola 2 ' + escola + ' !')
console.log(escola.replace(2, 'p'))

console.log("--------------------------")

console.log('Ana,Maria,Pedro'.split(',')) // GERA UM ARRAY, VETOR











