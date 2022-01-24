function apuraVotacao(votos) {
    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 1) {
            candidato1++
        }
        if (votos[i] === 2) {
            candidato2++
        }
        else if (votos[i] === 3) {
            candidato3++
        }

    }
    if (candidato1 > candidato2 && candidato1 > candidato3) {
        return "Vencedor: 1"
    }
    if (candidato2 > candidato1 && candidato2 > candidato3) {
        return "Vencedor: 2"
    }
    if (candidato3 > candidato1 && candidato3 > candidato2) {
        return "Vencedor: 3"
    }
    return "Empate"
}
module.exports = apuraVotacao;