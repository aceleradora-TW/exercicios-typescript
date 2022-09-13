function numerosArmstrong(numero) {
    const algorismo = (numero + '').length;
    const vetor = (numero+'').split('');
    let soma = 0;

    vetor.forEach((num) => { 
    soma += Math.pow(num, algorismo);
    });

    if(soma === numero)return "Este eh um numero de Armstrong!";

    return "Este nao eh um numero de Armstrong!"


    
}
module.exports = numerosArmstrong;