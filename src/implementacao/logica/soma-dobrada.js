function somaDobrada(umValor, outroValor) {
    const soma = umValor + outroValor;
    
    if(umValor === outroValor){
        return soma * 2;
    } 
    if(umValor < 1 || outroValor < 1){
        return -1;
    } else{
        return soma;
    }
}
module.exports = somaDobrada;