
Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {

    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra')

    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')

    } else if(nota.entre(0, 6.99)) {
        console.log('Reprovado')
        
    } else {
        console.log('Nota Invalida')
    }
}
imprimirResultado(10) // Quadro de Honra
imprimirResultado(9) // Quadro de Honra
imprimirResultado(7) // Aprovado
imprimirResultado(5) // Reprovado
imprimirResultado(0) // Reprovado
imprimirResultado(-1) // Nota Invalida


























