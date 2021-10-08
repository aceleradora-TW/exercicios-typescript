function fizzBuzz(numero) {

    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"
    } else if (numero % 5 === 0) {
        return "Buzz"
    } else if (numero % 3 === 0) {
        return "Fizz"
    } else {
        let num = String(numero)
        return num
    } 
    return numero;
}
module.exports = fizzBuzz;