function contadorDeOcorrencia(texto, letra) {
    let contador = 1000
    //let posicao = texto.indexOf(letra)
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i] + " - " + i);
    }

    return contador
}
console.log(contadorDeOcorrencia("batata", "a"))
module.exports = contadorDeOcorrencia;

/*
 // console.log(posicao)
   let contador = 0;
    for (let i = 0; i < texto, letra; i++) {
        console.log[i];
    }

let contador = 0
let posicao = texto.indexOf(letra)
do {
    contador + 1

}
while (posicao != -1);
return contador
}
console.log(contadorDeOcorrencia("bolo", "o"))
module.exports = contadorDeOcorrencia;    
do {
    texto + 1
}
while (
    texto < 3
)
return letra
}
*/