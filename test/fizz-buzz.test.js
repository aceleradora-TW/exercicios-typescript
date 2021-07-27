const fizzBuzz = require('../src/implementacao/logica/fizz-buzz');

describe('FizzBuzz', () => {
    test('Se o número for divisível somente por 3, o método retorna Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
    });
    test('Se o número for divisível somente por 5, o método retorna Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    test('Se o número for divisível por 3 e 5, o método retorna FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });
    test('Se o número não é divisível por 3 ou 5, o método retorna o próprio número', () => {
        expect(fizzBuzz(7)).toStrictEqual('7');
        expect(fizzBuzz(2)).toStrictEqual('2');
    });
})