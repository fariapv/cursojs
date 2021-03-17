// OPERADOR DE DESESTRUTURAÇÃO
// EXTRAIR DE DENTRO DE UM OBJETO SEUS ATRIBUTOS
// TIRAR ELEMENTOS DE UM ARRAY A PARTIR DESTA FORMA DE EXTRAIR
// {} - OBJETO LITERAL // [] - ARRAY

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

// tire NOME e IDADE de dentro do objeto PESSOA
const { nome, idade } = pessoa
console.log(nome, idade) // TIRAMOS DE DENTRO DO OBJETO

console.log("-----------------------")
const nova_pessoa = { ...pessoa, pes: "3" }
console.log(nova_pessoa)

console.log("-----------------------")
const { nome: n, idade: i } = pessoa // TROCANDO AS VARIAVEIS DE NOME
console.log(n, i) // PRINTANDO ELA NO CONSOLE

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep = true } } = pessoa
console.log(logradouro, numero, cep)


























