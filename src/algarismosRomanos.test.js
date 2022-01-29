const { converteParaAlgarismoRomano } = require('./algarismosRomanos');

describe('algarismosRomanos', () => {
  describe('converteParaAlgarismoRomano', () => {
    test('deve retornar I quando o valor recebido for 1', () => {
      const result = converteParaAlgarismoRomano(1);

      expect(result).toEqual('I');
    });

    test('deve retornar II quando o valor recebido for 2', () => {
      const result = converteParaAlgarismoRomano(2);

      expect(result).toEqual('II');
    });
  });
});
