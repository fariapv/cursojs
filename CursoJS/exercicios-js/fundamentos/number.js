// NUMBER = NUMEROS

// COMO ATRIBUIR VALOR A NUMBERS

// 1° FORMA
const peso1 = 1.0 
console.log(peso1)
console.log(Number.isInteger(peso1)) // TESTE (V OU F) SE É INTEIRO, TRUE
console.log(typeof peso1) // SABER O TIPO, NUMBER

// 2°FORMA
const peso2 = Number('2.1') 
console.log(peso2)
console.log(Number.isInteger(peso2)) // TESTE (V OU F) SE É INTEIRO, FALSE
console.log(typeof peso2) // SABER O TIPO, NUMBER

const media = (peso1 + peso2) / 2

console.log(media.toFixed(1)) // TIRAR CASAS DECIMAIS
console.log(media.toString()) // PASSAR MEDIA PARA UMA STRING
console.log(media.toString(2)) // VALOR BINARIO

// TYPEOF + VAR
console.log(typeof peso1) // NUMBER
console.log(typeof Number) // FUNCTION