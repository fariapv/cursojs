// PARAMETROS E RETORNOS SAO OPCIONAIS

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor Acima do Permitido: ${area}n2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area(5, 3))
console.log(area(5, 4))
console.log(area(5, 5))

























