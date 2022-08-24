function contadorDeOcorrencia(texto, letra) {
    let count = 0;
    for(let i =0;i<texto.length;i++){
        if(texto[i]== letra){
            count ++;
        }
    }
    
    return count;
}
module.exports = contadorDeOcorrencia;