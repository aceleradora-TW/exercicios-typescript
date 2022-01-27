function numerosArmstrong(numero) {
   
    let numeros = numero.toString().split('')
    let resultado = 0

    for (let i = 0; i < numeros.length ; i++){ 
        var potencia = numeros[i] ** numeros.length
        if(resultado += potencia){ //resultado = resultado + potencia
            return 'Este eh um numero de Armstrong!'
            }
            else if (resultado -= potencia){
        return 'Este nao eh um numero de Armstrong!'
            }
     } 
}

module.exports=numerosArmstrong;

/*var potencia = numeros[i] ** numeros.length
if(resultado += potencia){ //resultado = resultado + potencia
return 'Este eh um numero de Armstrong!'
}
return 'Este nao eh um numero de Armstrong!'
}




//console.log(numerosArmstrong(153))





/*
    let resultados = 0
    let numeros = numero.toString().split('')
    //let aleatoria = 0//
    
    for (let i = 0; i < numeros.length ; i++){ 
        console.log( numeros[i] **numeros.length ===resultados + resultados )

*/

// console.log( i + ' -------- ' + numeros[i] + ' ------' + **numeros.length )
    
    // let soma = 0;

    // let temporaria = numero;
    // while (temporaria > 0) {
    //     let resto = temporaria % 10;

    //     soma += resto * resto * resto;

    //     temporaria = parseInt(temporaria / 10);
    // }
    // if (soma == numero) {
    //     return 'Este eh um numero de Armstrong!';
    // }
    // return 'Este nao eh um numero de Armstrong!';