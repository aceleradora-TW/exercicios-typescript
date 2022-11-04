function numerosArmstrong(numero) {
  let nEsimaPotência = numero.toString().length;
  let numeroString = numero.toString();
  let novoArry = [];
  let total = 0;

  for (let i = 0; i < numeroString.length; i++) {
    let calculoExeponecial = Math.pow(numeroString[i], nEsimaPotência);
    novoArry.push(calculoExeponecial);
  }

  for (let k = 0; k < novoArry.length; k++) {
    total += novoArry[k];
  }

  return numero===total ? "Este eh um numero de Armstrong!" : "Este nao eh um numero de Armstrong!"

}
module.exports = numerosArmstrong;
