function apuraVotacoa(votos) {

    // switch case
    let contador1 = 0
    let contador2 = 0
    let contador3 = 0

     votos.forEach(voto => {        
        switch(voto) {
            case 1:
                contador1++
                break;
                
            case 2:
                contador2++
                break;
            
            case 3:
                contador3++
                break;
        }
     });


     if (contador1 > contador2 && contador1 > contador3) {
        return 'Vencedor: 1'
    }

    if (contador2 > contador1 && contador2 > contador3) {
        return 'Vencedor: 2'
    }
    
    if (contador3 > contador1 && contador3 > contador2) {
        return 'Vencedor: 3'
    }

    return 'Empate'

}
module.exports = apuraVotacoa;