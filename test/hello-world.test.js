const hello = require('../src/implementacao/hello-world');

test('Diz Hello World', () => {
    expect(hello()).toBe('Hello world');
});