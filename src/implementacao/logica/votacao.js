function apuraVotacao(votos) {
    let opcaoVoto1 = 0, opcaoVoto2 = 0, opcaoVoto3 = 0
    votos.forEach(element => {
        if (element == 1) {
            opcaoVoto1++
        }
        if (element == 2) {
            opcaoVoto2++
        }
        if (element == 3) {
            opcaoVoto3++
        }

    })

    const candidatas = {
        'Vencedor: 1': opcaoVoto1,
        'Vencedor: 2': opcaoVoto2,
        'Vencedor: 3': opcaoVoto3
    }
    const arrayCandidatas = []
    Object.entries(candidatas).forEach((element) => {
        arrayCandidatas.push(element)
    })
    
    let aux = 0
    let min
    for (let i = 0; i < 3; i++) {
        min = i;
        for (let j = i+1; j < 3; j++) {
            if (arrayCandidatas[j][1] < arrayCandidatas[min][1]) {
                min = j;
            }
           
            aux = arrayCandidatas[min]
            arrayCandidatas[min] = arrayCandidatas[i]
            arrayCandidatas[i] = aux
        }
    }
    if (arrayCandidatas[2][1] == arrayCandidatas[1][1]) return 'Empate'
    return arrayCandidatas[2][0]
}

console.log(apuraVotacao([2, 2, 2, 2, 1, 3, 3]))

module.exports = apuraVotacao;

