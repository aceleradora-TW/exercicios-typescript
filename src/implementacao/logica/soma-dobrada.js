function somaDobrada(umValor, outroValor) {
    
    if(umValor == outroValor){
        return 2*(umValor+outroValor);
    } else if(umValor < 1 || outroValor < 1) {
        return -1;
    } else {
        return umValor + outroValor;
    }
}
module.exports = somaDobrada;