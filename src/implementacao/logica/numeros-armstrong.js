function numerosArmstrong(numero) {
    let guardar = numero.toString().split("")
    let conta = 0
    for (i = 0; i < guardar.length; i++) {
        let potencia = guardar[i] ** guardar.length
        conta += potencia
    }
    if (conta === numero) {
        return "Este eh um numero de Armstrong!"
    }
    return 'Este nao eh um numero de Armstrong!'
}

numerosArmstrong(153)
module.exports = numerosArmstrong;