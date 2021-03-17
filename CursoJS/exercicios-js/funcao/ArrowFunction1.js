//* ser mais curta
//* this nao variavel

//* normal function
let dobro = function (a) {
  return 2 * a;
};

//* arrow function, sempre anonima
dobro = (a) => {
  return 2 * a;
};

//* o mais basico possivel, e nao precisa do return
dobro = (a) => 2 * a;
console.log(dobro(Math.PI));

let ola = function () {
  return "ola";
};

ola = () => "ola";
ola = () => "ola";
console.log(ola());
