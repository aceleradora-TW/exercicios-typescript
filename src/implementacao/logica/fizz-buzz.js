function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"
    }
    if (numero % 3 === 0) {
        return "Fizz"
    }
    if (numero % 5 === 0) {
        return "Buzz"
    }
    else {
        return numero.toString()
    }
}
module.exports = fizzBuzz;
