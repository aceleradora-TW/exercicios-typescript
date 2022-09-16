function contadorDeOcorrencia(texto, letra) {
    let count = 0

    for (i = 0; i <= texto.length; i++) {
        if (texto[i] === letra) {
            count++

        }
    }
    return count

}

console.log(contadorDeOcorrencia("bolo", "o"))
/*if (texto, letra) {
        return 2
}
if (texto, letra) {
    return 3
}
if (texto, letra) {
    return 1
}*/
module.exports = contadorDeOcorrencia;
