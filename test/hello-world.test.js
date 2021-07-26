const hello = require('../src/implementacao/hello-world');

test('adds 1 + 2 to equal 3', () => {
    expect(hello()).toBe('Hello world');
});