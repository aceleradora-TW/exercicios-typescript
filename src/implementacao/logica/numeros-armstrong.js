function numerosArmstrong(numero) {
    // 153 = precisamos saber quantos caracteres tem neste numero.
    // toString()
    // contador tem que começar em 0 --- EXEMPLO => let contador = 0
    // 'Este eh um numero de Armstrong!' ----- 'Este nao eh um numero de Armstrong!

    const numeroDeDigitos = numero.toString().split("")
    let contador = 0 

    for (let i = 0; i < numeroDeDigitos.length; i++){
        numeroDeDigitos[i] = numeroDeDigitos[i] ** numeroDeDigitos.length
        contador += numeroDeDigitos[i]
    }

    if (contador == numero) {
        return "Este eh um numero de Armstrong!"
    } else {
        return "Este nao eh um numero de Armstrong!"
        
    }
}
module.exports = numerosArmstrong;