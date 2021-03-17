/* ARRAY = VETOR
    // ESTRUTURA UNIDIRECIONAL
    // CONSEGUE AGRUPAR DIVERSAS VARIAVEIS
    // HETEROGENEO 
    // SEM TAMANHO FIXO
    // ------A------B------C-----D-----> VETOR
*/
console.log("--------------------------")

const valores = [1, 2, 3, 4, 5] //INDICE 0, INDICE 1, INDICE 2,

console.log(valores[0], valores[2]) // ASSIM Q SE PRINTA UM ARRAY

console.log(valores[0], valores[5]) // UNDEFINED, em outras linguagem ia dar erro

valores[5] = 10

console.log(valores[2], valores[5]) // AGORA Q VC DEFINIU ELE VAI PUXAR
console.log(valores) //DA TODAS AS VARIAVEIS DO ARRAY
console.log(valores.length) //SABER QUANTAS VARIAVEIS TEM NO ARRAY

valores.push({ id: 3 }, false, null, 'teste') // ADICIONANDO DENTRO DO ARRAY
console.log(valores)

console.log(valores.pop()) // EXCLUir O ULTIMO ELEMENTO DO ARRAY
delete valores[0]

console.log(valores) // DELETOU-SE INDICE 0 E O TESTE
console.log(typeof valores)


const pessoa = {
    nome: "lucas",
    nascimento: 1992,
    idade: function () {
        return this.nascimento
    }
}

console.log(pessoa.idade())


