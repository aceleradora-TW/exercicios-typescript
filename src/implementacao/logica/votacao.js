function apuraVotacao(votos) {
  let contagemDeVotos = 0;
  let contagemDeVotos2 = 0;
  let contagemDeVotos3 = 0;

  for (i = 0; i < votos.length; i++) {
    if (votos[i] === 1) {
      contagemDeVotos++;
    }
    if (votos[i] === 2) {
      contagemDeVotos2++;
    }
    if (votos[i] === 3) {
      contagemDeVotos3++;
    }
  }
  const vencedores = [
    [contagemDeVotos, "Vencedor: 1"],[contagemDeVotos2, "Vencedor: 2"],[contagemDeVotos3, "Vencedor: 3"]
  ];

  vencedores.sort((prev, next) => {
    return prev[0] - next[0];
  });

  if (vencedores[1][0] === vencedores[2][0]) {
    return "Empate";
  }

  return vencedores[2][1];
}

module.exports = apuraVotacao;
