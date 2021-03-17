{
    {
        {
            {
                 var sera = 'SERA??'
                 console.log(sera) // n precisa estar dentro de um bloco
            }
            
        }
        
    }
    
}

console.log(sera) // n precisa estar dentro de um bloco

function teste() {
    var local = 123 // essa var só estará visivel dentro da função
    console.log(local) // ta dentro do escopo, obvio q vc consegue
}
teste()
// console.log(local) // nao irá funcionar
// QUANDO SE CRIA UMA VARIAVEL FORA DE UMA FUNÇÃO, ELA SE TORNA GLOBAL
// QUANDO SE CRIA UMA VARIAVEL DENTRO DE UM FUNÇÃO, ELA SÓ SERPA VISTA DENTRO DA FUNÇÃO

