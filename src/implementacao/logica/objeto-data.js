function criaObjeto(data) {

    var dias = data.split('/')  

    return {"dia": dias[0], "mes": dias[1], "ano": dias[2]};
}
module.exports = criaObjeto;