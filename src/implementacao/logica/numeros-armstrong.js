function numerosArmstrong(numero) {
  let digitosArray = numero.toString().split("");

  let quantidadeDeDigitos = digitosArray.length;

  let digitosNumeros = digitosArray.map((digito) => parseInt(digito));

  let resultado = 0;
  for (let i = 0; i < quantidadeDeDigitos; i++) {
    resultado += Math.pow(digitosNumeros[i], quantidadeDeDigitos);
  }

  if (resultado == numero) {
    return "Este eh um numero de Armstrong!";
  } else {
    return "Este nao eh um numero de Armstrong!";
  }
}
module.exports = numerosArmstrong;
