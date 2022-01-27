function numerosArmstrong(numero) {

    let numeros = numero.toString().split('')
    let resultado = 0

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i] ** numeros.length

    } if (resultado === numero) {
        return "Este eh um numero de Armstrong!"
    }
    return "Este nao eh um numero de Armstrong!"
}
console.log(numerosArmstrong(153))
module.exports = numerosArmstrong;


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