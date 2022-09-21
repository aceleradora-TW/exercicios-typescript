function numerosArmstrong(numero) {
    let numeroSeparado = String(numero).split("");
    let somaDosDigitosElevados = 0;

    numeroSeparado.forEach(element => {
        somaDosDigitosElevados += element ** numeroSeparado.length;
    });

    if(somaDosDigitosElevados === numero){
        return `Este eh um numero de Armstrong!`;
    }
    else {
        return `Este nao eh um numero de Armstrong!`;
    }
}
module.exports = numerosArmstrong;