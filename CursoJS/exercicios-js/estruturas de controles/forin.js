// n precisa tanto controlar a variavel i
//  percorre os atributos de uma determinada estrutura
// quase ninguem utiliza desse modo com array

/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
 */

const notas = {
    Portugues: 6.7,
    Matematica: 7.4,
    Ingles: 9.8,
    Geo: 8.1,
    Hist: 7.7
} // array

for (let materia in notas) { // i = indice
    console.log(`${materia} = ${notas[materia]}`) // contador + valor do array
}

const pessoa = { // objeto
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64,
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) // console.log(atributo, "->", pessoa[atributo])
}













