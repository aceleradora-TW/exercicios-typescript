function apuraVotacoa(votos) {

    // switch case
    var contador1 = 0
    var contador2 = 0
    var contador3 = 0

    // votos.forEach(voto => {
    //     if(voto === 1){
    //     }
    // });


    for (var i = 0; i <= votos.length; i++) {
        if (votos[i] === 1) {
            contador1++;
        } else if (votos[i] === 2) {
            contador2++;
        } else if (votos[i] === 3) {
            contador3++;
        }
    }

    if (contador1 > contador2 && contador1 > contador3) {
        return 'Vencedor: 1';
    } else if (contador2 > contador1 && contador2 > contador3) {
        return 'Vencedor: 2';
    } else if (contador3 > contador1 && contador3 > contador2) {
        return 'Vencedor: 3';
    } else if (contador1 === contador2 || contador2 === contador3 || contador1 === contador3) {
        return 'Empate';
    }

}
module.exports = apuraVotacoa;