function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: "Note",
    preco: 4589,
    desc: 0.15,
    getPreco,
};
global.preco = 20;
global.desc = 0.15;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 2999, desc: 0.20 }

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 017, '$'))
console.log(getPreco.apply(global, [017, '$']))