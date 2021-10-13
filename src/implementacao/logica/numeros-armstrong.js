function numerosArmstrong(numero) {

    let result;
    let resultado = 0;

    let numParaString = String(numero)

    let arrayDigitos = numParaString.split("")

    let num = arrayDigitos.map((digito) => parseInt(digito))

    for (var i = 0; i < arrayDigitos.length; i++) {

        result = Math.pow(num[i], arrayDigitos.length)
        resultado += result
    }


    if (resultado == numero) {
        return "Este eh um numero de Armstrong!"
    } else {
        return "Este nao eh um numero de Armstrong!"
    }


}
module.exports = numerosArmstrong;