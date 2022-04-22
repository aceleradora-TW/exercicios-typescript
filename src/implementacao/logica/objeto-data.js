function criaObjeto(data) {
    var obj = {        
        dia: data[0] + data[1],
        mes: data[3] + data[4],         
        ano: data[6] + data[7] + data[8] + data[9]
    }               
    
    return obj 
} 

module.exports = criaObjeto;

/*
function criaObjeto(data) {        
    var obj = {         
    dia: data.replace(data, data[0] + data[1]), 
    mes: data.replace(data, data[3] + data[4]),   
    ano: data.replace(data, data[6] + data[7] + data[8] + data[9])  
}               

     return obj              
}    

module.exports = criaObjeto;
*/
/*
function criaObjeto(data) {
    var obj = {        
    dia: data.slice(0,2),    
    mes: data.slice(3,5),  
    ano: data.slice(6)   
}               
      return obj             

}

module.exports = criaObjeto;
*/
/*
function criaObjeto(data) {
    var dates = data.split("/")
    var obj = {        
        dia: String(dates.splice(0,1)),    
        mes: String(dates.splice(0,1)),  
        ano: String(dates.splice(0))
    }              
      return obj         
                               
}

module.exports = criaObjeto;
*/