const numerosArmstrong = require('../src/implementacao/logica/numeros-armstrong');
describe('Numeros de armstrong', () => {
    test('Identifica corretamente números de armstrong', () => {
        expect(numerosArmstrong(3)).toStrictEqual('Este eh um numero de Armstrong!');
        expect(numerosArmstrong(153)).toStrictEqual('Este eh um numero de Armstrong!');
    });
    test('Identifica corretamente números que não são de armstrong', () => {
        expect(numerosArmstrong(10)).toStrictEqual('Este nao eh um numero de Armstrong!');
        expect(numerosArmstrong(154)).toStrictEqual('Este nao eh um numero de Armstrong!');
    });
})