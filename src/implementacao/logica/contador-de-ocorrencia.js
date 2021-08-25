function contadorDeOcorrencia(texto, letra) {

    let arrayTexto = texto.split('');

    let retorno = arrayTexto.filter(letraArray=>letraArray == letra);
    
    return retorno.length;
}
module.exports = contadorDeOcorrencia;