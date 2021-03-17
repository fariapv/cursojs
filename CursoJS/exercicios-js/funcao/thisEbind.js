const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao) //acessando o pessoa para
    }
}
pessoa.falar() //bomdia

console.log('--------------')

const falar2 = pessoa.falar.bind(pessoa) //2 forma
falar2()






