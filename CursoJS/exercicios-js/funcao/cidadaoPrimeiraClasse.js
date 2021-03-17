// funcao em JS eh First-Class Object (Citizens)
// higher-order function

//criar forma literal
function nomeDaFun() {}

// armazenar em uma variavel
// funcao anonima
const variavel = function () {};

// armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  nomeDaFun,
  variavel,
];
console.log(array[0](2, 3)); // 5

// armazenar em um atributo de um objeto
const objeto = {};
objeto.falar = function () {
  return "ops";
};
console.log(objeto.falar());

//passar funcao como paramento para um outra funcao

function run(fun) {
  fun(); // se tirar o paranteses nao funciona
}
run(function () {
  console.log("Executando...");
});

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
//soma(primeira funcao)(segunda funcao)
soma(2, 3)(4); // 1 forma

const cincoMais = soma(2, 3); // segunda forma, vc coloca numa constante e depois puxa para a segunda funcao
cincoMais(4);
