const apuraVotacao = require('../src/implementacao/logica/votacao');

describe('Apura votacao', () => {
    test('Caso haja mais votos 1, retorna Vencedor 1', () => {
        expect(apuraVotacao([1, 1, 1, 2, 3, 3, 2])).toBe('Vencedor: 1');
    });
    test('Caso haja mais votos 2, retorna Vencedor 2', () => {
        expect(apuraVotacao([2, 2, 2, 2, 1, 3, 3])).toBe('Vencedor: 2');
    });
    test('Caso haja mais votos 3, retorna Vencedor 3', () => {
        expect(apuraVotacao([2, 2, 3, 3, 3, 3])).toBe('Vencedor: 3');
        expect(apuraVotacao([3, 3, 3, 3, 3, 3, 3])).toBe('Vencedor: 3');
    });
    test('Caso haja empate, retorna Empate', () => {
        expect(apuraVotacao([1, 2, 2, 2, 3, 3, 3])).toBe('Empate');
    });

})