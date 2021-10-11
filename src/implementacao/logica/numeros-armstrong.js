function numerosArmstrong(numero) {
    //1 - mapear os dígitos
    //2 - mapear a quant de dígitos = transformar em string e depois fazer o split
    //3 - (dígito1)^quant + (dígito2)^quant + (dígito3)^quant = result
    //se numero === result "é num de armstrong"
    //se não "n é num de armstrong"

    let result = "0";
    let numString = numero.toString();
    let quantDigitos = numString.split("")
    let potencia = quantDigitos.length
    let num = quantDigitos.map parseInt(quantDigitos)

    for (let i = 0; i < potencia; i++) {
        quantDigitos[i] = (quantDigitos[i] ** potencia)
        //153 = 1 ^ 3 = 1
        //153 = 5 ^ 3 = 125 
        //153 = 3 ^ 3 = 27
        result += quantDigitos[i]
        //result deve ser cada dígito elevado ao tamanho do array (quant de dígitos)
    }

    if (result == numero) {
        return "Este eh um numero de Armstrong!"
    } else {
        return "Este nao eh um numero de Armstrong!"
    }

}
module.exports = numerosArmstrong;