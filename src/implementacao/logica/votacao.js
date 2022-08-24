function apuraVotacao(votos) {
    let countNum1, countNum2, countNum3;
    countNum1 = countNum2 = countNum3 =0;

    for(let i =0; i<votos.length; i++){
        if(votos[i] == 1){
            countNum1 ++;
        }else if(votos[i]==2){
            countNum2 ++;
        }else if(votos[i]== 3){
            countNum3 ++;
        }
    }
    if(countNum1 > countNum2){
        if(countNum1 > countNum3){
            return "Vencedor: 1";
        }else{
            return "Vencedor: 3";
        }
    }
    else{
        if(countNum2> countNum3){
            return "Vencedor: 2";
        }else{
            return "Vencedor: 3";
        }
    }
    return "Empate";
}
module.exports = apuraVotacao;