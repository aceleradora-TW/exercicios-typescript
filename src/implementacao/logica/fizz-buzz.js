function fizzBuzz(numero) {
    
    const num = numero;

    if (numero % 2 === 0) {
        console.log("O numero eh divisivel por 2");
    } else {
        console.log("O numero nao eh divisivel por 2");
    }
    return null;
}
module.exports = fizzBuzz;