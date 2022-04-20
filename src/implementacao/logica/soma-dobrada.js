function somaDobrada(umValor, outroValor) {
    if(umValor < 1 || outroValor < 1){
        return -1
    }
    else if(umValor == outroValor){
        return (umValor + outroValor) * 2
    }
    
    return umValor + outroValor
    
}
module.exports = somaDobrada;