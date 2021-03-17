// numbertips = ALGUNS CUIDADOS QUE DEVEMOS TER NA DECLARAÇÃO DE NUMEROS
    // tem imprecisões nesses calculos

console.log(7 / 0) // = INFINITY, SÓ NO JS

console.log("10" / 2) // REALMENTE FUNCIONA, JS LÊ

console.log("10.2" / 2) // TEM RESULTADO

console.log("10,2" / 2) // NaN = NOT A NUMBER

console.log("SHOW" * 2) // NaN = NOT A NUMBER

console.log((0.1 + 0.7).toFixed(2)) // RESULTADO COM CASAS DECIMAIS REDUZIDAS

console.log("10" + 2) // ELE NAO VAI SOMAR, ELE VAI CONCATENAR
