function apuraVotacoa(votos) {

    let contaVoto1 = 0
    let contaVoto2 = 0
    let contaVoto3 = 0

    for(let i = 0; i <= votos.length; i++){
        if(votos[i] == 1){
            contaVoto1 += 1;
        } else if (votos[i] == 2){
            contaVoto2 += 1;
        } else if(votos[i] == 3){
            contaVoto3 += 1;
        }
    }

    if(contaVoto1 > contaVoto2 && contaVoto1 > contaVoto3){
        return "Vencedor: 1";
    } else if(contaVoto2 > contaVoto1 && contaVoto2 > contaVoto3){
        return "Vencedor: 2";
    } else if(contaVoto3 > contaVoto2 && contaVoto3 > contaVoto1){
        return "Vencedor: 3";
    }
        return "Empate";
    
}
module.exports = apuraVotacoa;