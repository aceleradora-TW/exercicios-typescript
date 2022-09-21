function criaObjeto(data) {
    let dataSeparada = data.split("/");

    return { dia: dataSeparada[0], mes: dataSeparada[1], ano: dataSeparada[2] };
}
module.exports = criaObjeto;