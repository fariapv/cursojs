// armazenando uma função em uma variavel

// nesse caso vc vai criar uma function sem nome, anonima
const imprimirSoma = function (a, b) {
    console.log(a + b)

}

imprimirSoma(2, 3)

// ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIAVEL
// REDUZIR A FORMA DE FAZER UMA FUNÇAO
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))


//retorno implicito

const subtracao = (a, b) => a - b // APENAS UMA LINHA DE CODIGO

console.log(subtracao(4, 5))

//outro caso tbm

const imprimir2 = a => console.log(a)
imprimir2('LEGAL!!!!!!!!')




