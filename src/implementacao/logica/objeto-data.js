function criaObjeto(data) {
    const separaData = data.split("/") 
    return {dia: separaData [0], mes: separaData [1], ano: separaData[2]}
}
module.exports = criaObjeto;