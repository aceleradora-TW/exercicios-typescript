function criaObjeto(data) {
    
    return new Date(data).toString()
    
}
console.log(criaObjeto("05-08-2918"))
module.exports = criaObjeto;

