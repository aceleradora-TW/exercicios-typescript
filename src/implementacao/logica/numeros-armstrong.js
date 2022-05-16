function numerosArmstrong(numero) {

    let inteiroPraString = numero.toString()    // parametro vira string    
    let numeroDigitos = inteiroPraString.length // potencia
    let digitoNumero = 0; // cada digito do parametro
    let somaDigitos = 0;


    for(let i = 0; i < numeroDigitos; i++){

        digitoNumero = (inteiroPraString[i] ** numeroDigitos)
        somaDigitos += digitoNumero

    }

    // diz se é ou não numero de armstrong
    if(somaDigitos == numero){
        return "Este eh um numero de Armstrong!"
    }
        return "Este nao eh um numero de Armstrong!"

    
}
module.exports = numerosArmstrong;