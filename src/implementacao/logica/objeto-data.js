function criaObjeto(data) {
    let dia,mes,ano,dataArray;
    dataArray = data.split("/");
    dia = dataArray[0];
    mes = dataArray[1];
    ano = dataArray[2];
    return {
        dia:dia,
        mes:mes,
        ano:ano
    };
}
module.exports = criaObjeto;