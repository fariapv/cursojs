function rand([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min]
    }
    if (min > max) [min, max] = [max, min]


    min > max ? [min, max] = [max, min] : null


    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}















console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10])) // ASSUME COMO 0 O MIN
console.log(rand([])) // ASSUME OS PADROES
// console.log(rand()) // ERRO












