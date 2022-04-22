function criaObjeto(data) {
    var dataCerta = data.split('/', 3);
    console.log (dataCerta)
    const dataObj = {
        dia:dataCerta[0],
        mes:dataCerta[1],
        ano:dataCerta[2]
    }
    return dataObj;
}

module.exports = criaObjeto;