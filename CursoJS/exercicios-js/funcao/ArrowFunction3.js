let comparaComThis = function (param) {
  console.log(this === param);
};
comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(this);

comparaComthisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); //! NAO VAI MUDAR, SEMPRE VAI FICAR NO Q TA ESCRITO
comparaComThisArrow(module.exports);
