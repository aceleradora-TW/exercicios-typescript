function numerosArmstrong(numero) {

    let numeros = numero.toString().split('')
    let multiplicacao = 0
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        multiplicacao = numeros[i] ** numeros.length
        soma += multiplicacao
    } if (soma == numero) {
        return "Este eh um numero de Armstrong!"
    } else {
        return "Este nao eh um numero de Armstrong!"
    }
}
module.exports = numerosArmstrong;
