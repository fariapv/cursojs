/*  
AND = 2 V &&
    v and v = v
    v and f = f
    f and x = f

OR = V + X ||
    v or x = v
    f or v = v
    f or f = f

XOR = V + F or F + V
    v xor v = f
    f xor f = f
    v xor f = v
    f xor v = v

!v = f
!f = v
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) - bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
































