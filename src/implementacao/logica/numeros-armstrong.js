function numerosArmstrong(numero) {


    let digitos = numero.toString().split('')
    let digitosReais = numero
    let a = 0

    for (let i = 0; i < digitos.length; i++) {
        digitos[i] = digitos[i] ** digitos.length
        a += digitos[i]
    }

    if (a == digitosReais) {
        return "Este eh um numero de Armstrong!";
    } else {
        return "Este nao eh um numero de Armstrong!";
    }

}
module.exports = numerosArmstrong;