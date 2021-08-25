# Apurar votacao

O problema:

Implemente o método aouraVotacao, que recebe como argumento um array com os votos de uma certa eleição, em valores numéricos, podendo ser `1`, `2` ou `3`. 

Caso haja mais votos `1`, retorne a string `Vencedor: 1`.

Caso haja mais votos `2`, retorne a string `Vencedor: 2`.

Caso haja mais votos `3`, retorne a string `Vencedor: 3`.

Caso haja empate, retorne a string `Empate`. 

Dica: podemos percorrer um array em javascript usando um `for` ou `foreach`.

## Casos de teste

    * Quando a entrada for "[1, 1, 1, 2, 3, 3, 2]", a saida deve ser "Vencedor: 1"
    * Quando a entrada for "[2, 2, 2, 2, 1]", a saida deve ser "Vencedor: 2"
    * Quando a entrada for "[2, 2, 3, 3, 3, 3]", a saida deve ser "Vencedor: 1"
    * Quando a entrada for "[1, 2, 2, 2, 3, 3, 3]", a saida deve ser "Empate"

