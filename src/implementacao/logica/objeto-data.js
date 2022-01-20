function criaObjeto(data) {
    const x = data.split('/')
    let objetoData = {
        dia: x[0],
        mes: x[1],
        ano: x[2]
    }

    return objetoData

}
module.exports = criaObjeto;

