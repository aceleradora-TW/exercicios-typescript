function contadorDeOcorrencia(texto, letra) {
    let contador = 0
    let posicao = texto.indexOf(letra)
    while (posicao != -1) {
        console.log(contador);
    }
}
module.exports = contadorDeOcorrencia;
/*    
    do {
        texto + 1
    }
    while (
        texto < 3
    )
    return letra
}
*/