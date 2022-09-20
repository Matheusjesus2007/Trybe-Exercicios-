const {encode, decode} = require('./encode')



test('Teste se encode e decode são funções;', () => {
    expect(encode)
})

test('Teste se encode e decode são funções;', () => {
    expect(decode)
})

test('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('matheus de jesus alexandrino')).toEqual('m1th25s d2 j2s5s 1l2x1ndr3n4');
})

test('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('matheus de jesus alexandrino')).toEqual('m1th25s d2 j2s5s 1l2x1ndr3n4');
    expect(encode('CCDYZ')).toEqual('CCDYZ');
    expect(encode('CCDYZ')).toHaveLength(5);

})

test('teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('m1th25s d2 j2s5s 1l2x1ndr3n4')).toEqual('matheus de jesus alexandrino');
    expect(decode('789')).toEqual('789');
    expect(decode('789')).toHaveLength(3);
})