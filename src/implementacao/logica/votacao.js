function apuraVotacoa(votos) {
 let contadorUm = 0;
 let contadorDois = 0;
 let contadorTres = 0;

 for (let i = 0; i < votos.length; i++) {
        if(votos[i] === 1) {
        contadorUm++
        } if (votos[i] === 2) {
            contadorDois++
        } if (votos[i] === 3) {
             contadorTres++
        } 
    }

    if(contadorUm > contadorDois && contadorUm > contadorTres) {
        return "Vencedor: 1"
    } if (contadorDois > contadorUm && contadorDois > contadorTres) {
        return "Vencedor: 2"
    } if (contadorTres > contadorUm && contadorTres > contadorDois) {
        return "Vencedor: 3"
    } else {
        return "Empate"
    }
}
module.exports = apuraVotacoa;