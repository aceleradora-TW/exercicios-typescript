function criaObjeto(data) {
    let dataArray = data.split("/");

    let dataObjeto = { dia: dataArray[0], mes: dataArray[1], ano: dataArray[2] };

    return dataObjeto;
}

module.exports = criaObjeto;