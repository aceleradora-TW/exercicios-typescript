function criaObjeto(data) {
    let novaData= data.split("/",3)
 
    const objData = {
        dia:novaData[0],
        mes:novaData[1],
        ano:novaData[2]
    }
    return objData; 
}
module.exports = criaObjeto;