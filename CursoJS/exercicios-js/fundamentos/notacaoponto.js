console.log(Math.ceil(6.1))



const obj1 = {}
obj1.nome = 'bola'
// obj1['nome'] = 'bola2'
console.log(obj1.nome)

function Obj(nome) {  //CRIANDO UM OBJETO
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}



function Animal(nome, cor, som) {
    this.nome = nome
    this.cor = cor
    this.som = som
    this.x = 10
    //metodos
    this.correr = function (direction) {
        if (direction == "d") {
            this.x++
            console.log("foi pra direita")
        } else if (direction == "a") {
            this.x--
            console.log("foi pra esquerda")
        }

    }
    this.atacar = function (atacar) {

    }
}

const gato = new Animal("Half", "Vermelho", "Miauw")
console.log(gato.x)
gato.correr("a")
console.log(gato.x)




const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()





