function apuraVotacao(votos) {
    let candidato1 = 0, candidato2 = 0, candidato3 = 0;

    votos.forEach(element => {
        if(element === 1) {
            candidato1++;
        }
        else if(element === 2) {
            candidato2++;
        }
        else {
            candidato3++;
        }
    });

    if(candidato1 > candidato2 && candidato1 > candidato3) {
        return `Vencedor: 1`;
    }
    else if(candidato2 > candidato1 && candidato2 > candidato3) {
        return `Vencedor: 2`;
    }
    else if(candidato3 > candidato1 && candidato3 > candidato2) {
        return `Vencedor: 3`;
    }
    else if(candidato1 === candidato2 || candidato2 === candidato3 || candidato3 === candidato1) {
        return `Empate`;
    }
}
module.exports = apuraVotacao;