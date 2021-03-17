function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('NoteBook', 2199.00))
console.log(criarProduto('Telefone', 1349.00))