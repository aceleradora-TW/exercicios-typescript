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

let numSaveArray = numero.toString().split('')
let soma = 0
for (i = 0; i < numSaveArray.length; i++) {
    let pontecia = numSaveArray[i] ** numSaveArray.length
    soma += pontecia

}
if (soma === numero) {
    return 'Este eh um numero de Armstrong!'
} else if (soma !== numero) {
    return 'Este nao eh um numero de Armstrong!'
}

module.exports = numerosArmstrong;