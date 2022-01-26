function numerosArmstrong(numero) {

    let numeros = numero.toString().split('')
    //let aleatoria = 0//
    
    for (let i = 0; i < numeros.length ; i++){ 
        console.log( i + ' ---------- ' + numeros[i] + ' ---------- ' + numeros.length )

    }
    return "retorno"
}
console.log(numerosArmstrong(560))
module.exports = numerosArmstrong;

// testar com for depois.

    
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