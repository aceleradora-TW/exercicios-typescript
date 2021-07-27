const hello = require('../src/implementacao/introducao/hello-world');

test('Diz Hello World', () => {
    expect(hello()).toBe('Hello world');
});