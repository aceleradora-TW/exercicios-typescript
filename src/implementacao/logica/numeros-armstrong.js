function numerosArmstrong(numero) {
    const numeroString = numero.toString()
    const digitos = numeroString.length
    let soma = 0;
    
    for(let i = 0; i < digitos; i++){
        let potencia = numeroString[i] ** digitos
        soma += potencia;
    }
    if(soma === numero){
        return "Este eh um numero de Armstrong!"
    } else {
        return "Este nao eh um numero de Armstrong!"
    }  
}

module.exports = numerosArmstrong;