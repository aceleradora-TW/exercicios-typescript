function criaObjeto(data) {
    
    // let data = [];
    let dia = data.slice(0, 2);
    let mes = data.slice(3, 5);
    let ano = data.slice(6/*, 10*/);

    return {
        dia: dia,
        mes: mes,
        ano: ano
    } 
}
module.exports = criaObjeto;