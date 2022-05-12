function criaObjeto(data) {
    
    return {
        dia: data[0][1],
        mes: data[3][4],
        ano: data[6][7][8][9]
    }
    
}
module.exports = criaObjeto;