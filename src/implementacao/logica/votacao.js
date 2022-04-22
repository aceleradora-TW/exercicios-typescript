function apuraVotacoa(votos) {
    var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    votos.forEach(function(num){
        if(num==1){
            cont1++;
        }else if(num==2){
            cont2++;
        }else if (num==3){
            cont3++;
        }
    })
    if (cont1>cont2 && cont1>cont3){
        return "Vencedor: 1";
    } else if(cont2>cont1 && cont2>cont3){
        return "Vencedor: 2";
    }else if(cont3>cont2 && cont1<cont3){
        return "Vencedor: 3";
    }
    return "Empate";
}
module.exports = apuraVotacoa;
/* var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    for (var i =0; i<votos.length; i++){
        if(votos[i]==1){
            cont1++;
        }else if(votos[i]==2){
            cont2++;
        }else if (votos[i]==3){
            cont3++;
        }
    }
    if (cont1>cont2 && cont1>cont3){
        return "Vencedor: 1";
    }else if(cont2>cont1 && cont2>cont3){
        return "Vencedor: 2";
    }else if(cont3>cont2 && cont1<cont3){
        return "Vencedor: 3";
    }
    return "Empate";
}
module.exports = apuraVotacoa;*/