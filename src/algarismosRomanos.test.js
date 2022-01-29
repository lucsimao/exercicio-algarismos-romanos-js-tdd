const { converteParaAlgarismoRomano } = require('./algarismosRomanos');

describe('algarismosRomanos', () => {
  describe('converteParaAlgarismoRomano', () => {
    test('deve retornar INVALIDO quando o valor recebido for 0', () => {
      const result = converteParaAlgarismoRomano(0);

      expect(result).toEqual('INVALIDO');
    });

    test('deve retornar I quando o valor recebido for 1', () => {
      const result = converteParaAlgarismoRomano(1);

      expect(result).toEqual('I');
    });

    test('deve retornar II quando o valor recebido for 2', () => {
      const result = converteParaAlgarismoRomano(2);

      expect(result).toEqual('II');
    });

    test('deve retornar III quando o valor recebido for 3', () => {
      const result = converteParaAlgarismoRomano(3);

      expect(result).toEqual('III');
    });

    test('deve retornar IV quando o valor recebido for 4', () => {
      const result = converteParaAlgarismoRomano(4);

      expect(result).toEqual('IV');
    });
  });
});
