# O Tradutor Fizz Buzz

O problema:

- Se o número for divisível somente por `3`, o método retorna `Fizz`

- Se o número for divisível somente por `5`, o método retorna `Buzz`

- Se o número for divisível por ambos `3` e `5`, o método retorna `FizzBuzz`

- Se o número não for divisível por nenhum dos dois, o método retorna o próprio número em formato de String

__Dicas:__

Utilize o operador `%` para saber se um número é divisível por outro. Para saber se um número é divisível por 2, por
exemplo, podemos usar o seguinte:

```javascript
int numero = 4;

if (numero % 2 === 0) {
    console.log("O numero eh divisivel por 2");
} else {
    console.log("O numero nao eh divisivel por 2");
}
```

Para converter um número inteiro para String, pode-se utilizar os métodos `String()`

```javascript
const numero = String(2); // numero == "2"

```

## Traduz numeros divisiveis por 3 para Fizz

* Ao receber "3" deve retornar "Fizz"
* Ao receber "6" deve retornar "Fizz"
* Ao receber "12" deve retornar "Fizz"

## Traduz numeros divisiveis por 5 para Buzz

* Ao receber "5" deve retornar "Buzz"

## Traduz numeros divisiveis por 3 e por 5 para FizzBuzz

* Ao receber "15" deve retornar "FizzBuzz"
* Ao receber "30" deve retornar "FizzBuzz"
* Ao receber "45" deve retornar "FizzBuzz"

## Traduz numeros que nao sao diviseis para o proprio numero em forma de String

* Ao receber "7" deve retornar "7"
* Ao receber "2" deve retornar "2"
