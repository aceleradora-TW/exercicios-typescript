function contadorDeOcorrencia(texto, letra) {
    return texto.split(letra).length - 1
   
}
module.exports = contadorDeOcorrencia;