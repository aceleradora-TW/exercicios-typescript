function apuraVotacoa(votos) {
    let contador1=0;
    let contador2=0;
    let contador3=0;
   for (let index = 0; index < votos.length; index++) {
       const voto = votos[index];
       if (voto===1){
        contador1 ++;
       }
       if (voto===2){
        contador2 ++;
       }
       if (voto===3){
        contador3 ++;
       }
    }
    if (contador1 > contador2 && contador1 > contador3){
        return "Vencedor: 1";
    }
    if (contador2 > contador1 && contador2 > contador3){
        return "Vencedor: 2";
    }
    if (contador3 > contador1 && contador3 > contador2){
        return "Vencedor: 3";
    }
    else {
        return "Empate"
    }
    
}

module.exports = apuraVotacoa;