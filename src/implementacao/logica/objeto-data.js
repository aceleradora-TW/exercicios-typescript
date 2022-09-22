function criaObjeto(data) {

    let temp = data.split('/')

    let obj = {
        dia: temp[0],
        mes: temp[1],
        ano: temp[2]
    }
    return obj
}

module.exports = criaObjeto;
  // let temp = new Date(data)