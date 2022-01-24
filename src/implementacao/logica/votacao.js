function apuraVotacoa(votos) {
    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0

    for (let i = 0; i < votos.lenght; i++) {
        console.log(votos[i])
        if (votos[i] === 1) {
            candidato1++
        }
        if (votos[i] === 2) {
            candidato2++
        }
        else if (votos[i] === 3) {
            candidato3++
        }
        console.log(candidato1)
    }

}
apuraVotacoa([1, 1, 1, 2, 3, 3, 2])
module.exports = apuraVotacoa;

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