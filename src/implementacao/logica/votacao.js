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
        return "Vencedor:1"
    }
    if (candidato2 > candidato1 && candidato2 > candidato3) {
        return "Vencedor:2"
    }
    if (candidato3 > candidato1 && candidato3 > candidato2) {
        return "Vencedor:3"
    }
}

//(apuraVotacao([1, 1, 1, 2, 3, 2]))
module.exports = apuraVotacao;

/*


console.log(votos)
    switch (votos) {
        case "1": 
    console.log("vencedor 1")
            break;//
    }



while/doWhile =

if/else =

let jacó = "pastor"
 if (jacó === "pastor")
 return "jesus voltará"
} else { "diabo toma conta"

switchCase = 

let votos = (numero do canditado)
 = fazer alguma coisa
switch (fruta){
    case "Laranja":
        console.log("as laranjas estão caras");
break;
     case "Maçã":
        console.log("as maçãs estão baratas");
} default: console.log("não temos laranjas nem maçãs" + fruta + ".")

for = 

*/