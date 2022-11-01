
function somaDobrada(umValor, outroValor) {
    let soma= umValor + outroValor
    if(umValor === outroValor){
        let dobroValor= soma * 2
        return dobroValor
    }if((umValor < 1) ||(outroValor < 1) ){
        return -1
    }else {
        return soma
    }
}
module.exports = somaDobrada;