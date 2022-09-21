function contadorDeOcorrencia(texto, letra) {
    let stringSeparada = texto.split("");
    let cont = 0;
    
    for(let i = 0; i < stringSeparada.length; i++) {
        if(stringSeparada[i] === letra) {
            cont++;
        }
    }

    return cont;
}
module.exports = contadorDeOcorrencia;