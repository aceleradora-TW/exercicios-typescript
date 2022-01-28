function numerosArmstrong(numero) {

    let numeros = numero.toString().split('')
    let resultado = 0

    for (let i = 0; i < numeros.length ; i++){ 
        var potencia = numeros[i] ** numeros.length
        resultado += potencia
    }
    if(resultado === numero){
        return 'Este eh um numero de Armstrong!'
    }
    
    return 'Este nao eh um numero de Armstrong!'

}
//console.log(numerosArmstrong(54))
module.exports=numerosArmstrong;


/*function numerosArmstrong(numero) {
   
    let numeros = numero.toString().split('')
    let resultado = 0

    for (let i = 0; i < numeros.length ; i++){ 
        var potencia = numeros[i] ** numeros.length
     resultado += potencia //resultado = resultado + potencia
     
     }
     return resultado
}
console.log(numerosArmstrong(153))
module.exports=numerosArmstrong;
*/


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

/*sexta-feira

    if(resultado -= potencia){ //resultado = resultado + potencia
        console.log('Este eh um numero de Armstrong!')
       }
       else if (resultado += potencia){
   console.log('Este nao eh um numero de Armstrong!')
       }
}
return  resultado       if(resultado -= potencia){ //resultado = resultado + potencia
    console.log('Este eh um numero de Armstrong!')
   }
   else if (resultado += potencia){
console.log('Este nao eh um numero de Armstrong!')
   }
}
return  resultado
*/