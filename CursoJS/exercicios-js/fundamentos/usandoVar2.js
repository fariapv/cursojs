var numero = 1
// FUJA DO ESCOPO GLOBAL
{
    var numero = 2 // sobrescreveu a primeira
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)




