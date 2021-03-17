// função sem retorno
// função é uma receita de bolo (tem tudo a ver com algoritmo e dados)
// função é um verbo, uma ação, executa um processo de acordo com a setença de codigo
// função define um bloco associada (BLOCO DELIMITADO POR CHAVES)
// função é um trecho(BLOCO DE CODIGO) de codigo que deu um nome a ele e voce pode reusar onde vc quer chamar no seu programa
// recebe dados(parametros) de entrada(INGREDIENTES), tem o passo a passo(COMO FAZER), retorna o resultado(BOLO)
// bloco de codigo nomeado
// um função pode nao receber nenhum parametro, nao retornar o resultado. existem diversos tipos

// function 'NOME DA FUNÇÃO'
// sempre colocar bons nomes
// n se usou a palavra VAR ou LET ou CONST, apenas colocou o nome das variaveis
// N RETORNA VALOR
function imprimirSoma(a, b) {
    console.log(a + b)

} 
imprimirSoma(2, 3) // foi passado dois valores para função e ela retornou o resultado
imprimirSoma(2) // o resultado foi dado com um NaN
imprimirSoma(2, 10, 4, 5) // vai funcionar, ele ignora o resto apenas
imprimirSoma() // o resultado foi dado com um NaN

console.log("--------------------------")

// VC TEM UM VALOR PADRAO QUANDO ELE N FOI PASSADO NA CHAMADA DA FUNÇÃO
function soma(a = 1, b = 1) {
 return a + b // VC NAO PRINTOU NO CONSOLE

}
console.log(soma(2, 3))
console.log(soma(2)) // ELE VAI RETORNAR APENAS 2 PQ O B JA FOI DADO COMO 0
console.log(soma())

console.log("--------------------------")


