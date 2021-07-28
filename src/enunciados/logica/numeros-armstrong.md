# O Identificador de números Armstrong

Um número de Armstrong é um número em que é a soma de seus próprios dígitos elevados ao número de dígitos é igual ao
próprio número. Confuso? Vejamos alguns exemplos:

`9` é um número de Armstrong, porque `9 = 9 ^ 1 = 9`
`10` não é um número de Armstrong, porque `10 != 1 ^ 2 + 0 ^ 2 = 1`
`153` é um número de Armstrong, porque: `153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153`
`154` não é um número de Armstrong, porque: `154 != 1 ^ 3 + 5 ^ 3 + 4 ^ 3 = 1 + 125 + 64 = 190`

Escreva algum código para determinar se um número é um número Armstrong. Pense nos casos de teste:

## Retorna mensagem de sucesso quando o numero for de Armstrong

* Identifica "3" corretamente, responendo "Este eh um numero de Armstrong!"
* Identifica "153" corretamente, responendo "Este eh um numero de Armstrong!"

## Retorna mensagem de aviso quando o numero NAO for de Armstrong

* Identifica "10" corretamente, responendo "Este nao eh um numero de Armstrong!"
* Identifica "154" corretamente, responendo "Este nao eh um numero de Armstrong!"

