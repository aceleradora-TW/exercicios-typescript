function contadorDeOcorrencia(texto, letra) {

    let contaOcorrencias = 0;

    for(let i = 0; i <= texto.length; i++){
        if(texto[i] == letra){
            contaOcorrencias += 1;
        }
    }
    return contaOcorrencias;
}
module.exports = contadorDeOcorrencia;
