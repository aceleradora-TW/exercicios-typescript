const contadorDeOcorrencia = require('../src/implementacao/logica/contador-de-ocorrencia');

describe('Contador de ocorrencia', () => {
    test('Ao receber o texto "bolo" e a busca "o", deve retornar 2', () => {
        expect(contadorDeOcorrencia('bolo', 'o')).toBe(2);
    });
    test('Ao receber o texto "batata" e a busca "a", deve retornar 3', () => {
        expect(contadorDeOcorrencia('batata', 'a')).toBe(3);
    });
    test('Ao receber o texto "Alejandro" e a busca "a", deve retornar 1', () => {
        expect(contadorDeOcorrencia('Alejandro', 'a')).toBe(1);
    });
    test('Ao receber o texto "Uma Escola" e a busca "i", deve retornar 0', () => {
        expect(contadorDeOcorrencia('Uma Escola', 'i')).toBe(0);
    });
})