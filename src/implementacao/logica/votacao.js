function apuraVotacao(votos) {

    let countVencedor1 = 0
    let countVencedor2 = 0
    let countVencedor3 = 0

    for (i = 0; i <= votos.length; i++) {

        if (votos[i] === 1) {
            countVencedor1++
        }
        else if (votos[i] === 2) {
            countVencedor2++
        }
        else if (votos[i] === 3) {
            countVencedor3++
        }
    }
    if (countVencedor1 > countVencedor2 && countVencedor1 > countVencedor3) {
        return "Vencedor: 1"
    }
    else if (countVencedor2 > countVencedor1 && countVencedor2 > countVencedor3) {
        return "Vencedor: 2"
    }
    else if (countVencedor3 > countVencedor1 && countVencedor3 > countVencedor2) {
        return "Vencedor: 3"
    }
    else if (countVencedor1 === countVencedor2 || countVencedor2 === countVencedor3) {
        return "Empate"
    }
}
module.exports = apuraVotacao;