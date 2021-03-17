// multiplas seleções
// nao volta V ou F, e sim um valor
//
/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break

        case 8: case 7:
            console.log('Aprovado')
            break

        case 6: case 5: case 4:
            console.log('Recuperação')
            break

        default:
            console.log('Reprovado')

    }
}
imprimirResultado(10)
imprimirResultado(8.8)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)























