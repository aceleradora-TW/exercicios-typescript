function apuraVotacoa(votos) {
    let cont1=0
    let cont2=0
    let cont3=0

    for( let i=0; i< votos.length; i++){
        if (votos[i] == 1){
            cont1++
        }else if(votos[i] == 2){
            cont2++
        }else{
            cont3++
        }
    }

    if (cont1> cont2 && cont1> cont3){
        return 'Vencedor: 1'
    }else if(cont2> cont1 && cont2> cont3 ){
        return 'Vencedor: 2'
    }else if(cont3> cont1 && cont3> cont2){
        return 'Vencedor: 3'
    }else{
        return 'Empate'
    }
    
   

}
module.exports = apuraVotacoa;