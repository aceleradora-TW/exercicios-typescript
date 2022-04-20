function contadorDeOcorrencia(texto, letra) {
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        
        if(letra === texto[i]){
            contador ++;
        }
    }
    return contador;
}
module.exports = contadorDeOcorrencia;