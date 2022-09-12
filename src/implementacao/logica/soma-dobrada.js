function somaDobrada(umValor, outroValor) {

    if(umValor<1 || outroValor<1) return -1

    if(umValor===outroValor) return umValor*4
    
    return umValor+outroValor;
}
module.exports = somaDobrada;