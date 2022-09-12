function contadorDeOcorrencia(texto, letra) {
    let cont = 0;
    const tam = texto.length;

    for(let i = 0; i<tam; i++){
        if(texto[i]=== letra)cont++;
    }  return cont;
     
}
module.exports = contadorDeOcorrencia;

/*
function contadorDeOcorrencia(texto, letra) {
    //var regex = new RegExp(`/${letra}/g`);
    return texto.match(/a/g).length;

}
console.log(contadorDeOcorrencia('banana', 'i'))
module.exports = contadorDeOcorrencia;*/