const even_and_odd = require('./even_and_odd');
test("짝수와 홀수", () => {
    expect(even_and_odd(1)).toStrictEqual('Odd')
})