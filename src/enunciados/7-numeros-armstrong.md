# O Identificador de números Armstrong

Números de Armstrong são números onde a soma de cada algarismo elevado à quantidade de algarismos é igual ao número original. Por exemplo:

- Para verificar se o número 9 é um número de Armstrong, fazemos o seguinte cálculo: 
  - \(9\) (o primeiro algarismo do número original) elevado a \(1\) (a quantidade de algarismos do número original).
  - Portanto, \(9^1 = 9\), logo 9 é sim um número de Armstrong.

- Agora, considere o número 13:
  - \(1\) (primeiro algarismo) elevado a \(2\) (total de algarismos) mais \(3\) (segundo algarismo) elevado a \(2\) (total de algarismos).
  - O cálculo seria \(1^2 + 3^2 = 1 + 9 = 10\), logo 13 não é um número de Armstrong.

- Para o número 153:
  - \(1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153\)
  - Portanto, 153 é um número de Armstrong.

Escreva algum código para determinar se um número é um número Armstrong. Pense nos casos de teste:

## Retorna mensagem de sucesso quando o numero for de Armstrong

* Identifica "3" corretamente, responendo "Este eh um numero de Armstrong!"
* Identifica "153" corretamente, responendo "Este eh um numero de Armstrong!"

## Retorna mensagem de aviso quando o numero NAO for de Armstrong

* Identifica "10" corretamente, responendo "Este nao eh um numero de Armstrong!"
* Identifica "154" corretamente, responendo "Este nao eh um numero de Armstrong!"

