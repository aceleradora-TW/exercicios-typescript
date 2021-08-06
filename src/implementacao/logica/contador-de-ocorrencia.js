function contadorDeOcorrencia(texto, letra) {

var str = texto;
    count = 0;
    pos = str.indexOf(letra);

while ( pos != -1 ) {
   count++;
   pos = str.indexOf(letra, pos + 1);
}
return count;    
}

module.exports = contadorDeOcorrencia;