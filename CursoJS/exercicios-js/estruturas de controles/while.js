/* 
desanhada para quando vc tem uma quantidade indeterminada de repetições
retorna V ou F
ENQUANTO FOR VERDADEIRA FAÇA CONTINUAMENTE ATE Q SE TORNE FALSA........
*/
/* while (condition) {
    
} */

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.!`) // template string
}

console.log('Até a Proxima!')

let months = 1

while (true) {
    if (months > 12)
        return false
    switch (months) {
        case 1:
            console.log("Janeiro")
            break;

        case 2:
            console.log(`${months} - fev`)
            break;
        case 3:
            console.log("mar")
            break;
        case 4:
            console.log("abril")
            break;
        case 5:
            console.log("maio")
            break;
        case 6:
            console.log("junho")
            break;
        case 7:
            console.log("julho")
            break;
        case 8:
            console.log("ags")
            break;
        case 9:
            console.log("sep")
            break;
        case 10:
            console.log("oc")
            break;
        case 11:
            console.log("nov")
            break;
        case 12:
            console.log("dez")
            break;



        default:
            break;
    }
    months++
}
























