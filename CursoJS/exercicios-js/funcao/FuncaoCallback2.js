const notas = [7, 6, 2, 5, 4, 3, 10];

//*Sem usar o callback

let notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]); //ADICIONANDO ALGO NO ARRAY
    }
}
console.log(notasBaixas1);

//*Com callback
//filter - true vai pro array | false n vai
notasBaixas1 = notas.filter(function (nota) {
    return nota < 7;
})
console.log('----------')
//*Arrow Function
notasBaixas2 = notas.filter(nota => nota < 7);
console.log(notasBaixas2);

console.log('----------')

const notasMenorQue7 = nota => nota < 7
notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);