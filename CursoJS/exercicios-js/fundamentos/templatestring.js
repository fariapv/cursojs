const nome = 'rebeca' //INDICANDO UMA CONST
const plus = 1 + 1
const conca = 'Ola ' + nome + '!' //FAZENDO UMA CONCATENAÇÃO
const template = `
    Olá
    ${nome} !` //PRA FAZER PULAR LINHA(TEMPLATE)
console.log(conca, template)

console.log("--------------------------")

//EXPRESSOES
console.log(`1 + 1 = ${1 + 1}`) //OUTRO TEMPLATE POREM COM EXPRESSOES
console.log(`1 + 1 = ${plus}`)

console.log("--------------------------")

const up = texto => texto.toUpperCase() //FUNÇÃO UP
console.log(`Ei... ${up('cuidado')}! `) //CHAMAR UMA FUNÇÃO UP JUNTO COM UM TEMPLATE STRING