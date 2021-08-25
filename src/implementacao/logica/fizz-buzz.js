function fizzBuzz(numero) {
    //3, 5, 3 && 5 else - nenhum

    var retorno = "";

    if (numero % 3 == 0) {
        retorno = "Fizz"

    }
    if (numero % 5 == 0) {
        retorno += "Buzz"
    }
    if (retorno == "") {
        retorno = String(numero)
    }
    return retorno
}

module.exports = fizzBuzz;