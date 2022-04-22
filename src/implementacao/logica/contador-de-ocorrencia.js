function contadorDeOcorrencia(texto, letra) {
    /*var cont = 0;
    for (var i = 0; i <= texto.length; i ++){
      if (letra == texto[i]){
          cont++;
      }  
    }*/
    var letras=[];
    for(var i = 0; i < texto.length; i ++){
        if(letra === texto[i].valueOf()){
            letras.push(letra)
        }
    }
    return letras.length;
}
module.exports = contadorDeOcorrencia;