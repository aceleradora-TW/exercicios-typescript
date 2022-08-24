function numerosArmstrong(numero) {
    let soma=0;
    let numeroString = numero.toString();
    if(numero > 10){
        for(let i = 0; i<numeroString.length; i++){
            soma += Math.pow(parseFloat(numeroString[i]),numeroString.length);
        }
        if(soma == numero){
            return 'Este eh um numero de Armstrong!';
        }else{
            return 'Este nao eh um numero de Armstrong!';
        }
    }
    soma = Math.pow(numero,numeroString.length);
    if(soma == numero){
        return 'Este eh um numero de Armstrong!';
    }else{
        return 'Este nao eh um numero de Armstrong!';
    }
}
module.exports = numerosArmstrong;