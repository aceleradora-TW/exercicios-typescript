const somaDobrada = require('../src/implementacao/logica/soma-dobrada');

describe('Soma dobrada', () => {
    test('Caso dois números sejam iguais, retorna o dobro da soma', () => {
        expect(somaDobrada(7, 7)).toBe(28);
        expect(somaDobrada(2, 2)).toBe(8);
    });
    test('Caso um dos números seja menor do que 1, o método retorna -1', () => {
        expect(somaDobrada(3, -3)).toBe(-1);
    });
    test('Caso nenhuma das condições anteriores seja verdadeira, o método retorna a soma dos dois números.', () => {
        expect(somaDobrada(1, 2)).toBe(3);
        expect(somaDobrada(3, 2)).toBe(5);
    });
})