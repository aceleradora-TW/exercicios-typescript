function criaObjeto(data) {
    let lista = data.split("/")

    let objeto = {
        dia: lista[0],
        mes: lista[1],
        ano: lista[2]
    }
    return objeto;
}
module.exports = criaObjeto;