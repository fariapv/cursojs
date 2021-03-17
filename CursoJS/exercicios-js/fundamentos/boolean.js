//METODO BOOLEAN - JS ACEITA TUDO COMO VERDADEIRO E FALSO
    // NESTE MOMENTO NAO VAMOS ENTRAR COM 'E' E 'OU'

let isAtivo = false
    console.log(isAtivo) // FALSE

isAtivo = true
    console.log(isAtivo) // TRUE

isAtivo = 1
    console.log(!!isAtivo) // !! = naonao / TRUE

isAtivo = 1
    console.log(!isAtivo) // ! = nao  / FALSE

console.log("--------------------------")

console.log('VERDADEIROS') //BASTA TER UM ESPAÇO EM BRANCO, SEM SER 0 ,Q SERÁ VERDADEIRO
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))

console.log("--------------------------")

console.log('FALSOS') //
console.log(!!0)
console.log(!!` `)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("--------------------------")
let nome = ''
console.log(nome || 'desconhecido') // se o nome nao estiver preenchido ele da o segundo termo

let nome2 = 'Lucas'
console.log(nome2 || 'desconhecido') // se o nome estiver preenchido me de o valor dela