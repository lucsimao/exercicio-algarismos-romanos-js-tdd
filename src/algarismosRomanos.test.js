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

    test('deve retornar V quando o valor recebido for 5', () => {
      const result = converteParaAlgarismoRomano(5);

      expect(result).toEqual('V');
    });

    test('deve retornar VI quando o valor recebido for 6', () => {
      const result = converteParaAlgarismoRomano(6);

      expect(result).toEqual('VI');
    });

    test('deve retornar VII quando o valor recebido for 7', () => {
      const result = converteParaAlgarismoRomano(7);

      expect(result).toEqual('VII');
    });

    test('deve retornar VIII quando o valor recebido for 8', () => {
      const result = converteParaAlgarismoRomano(8);

      expect(result).toEqual('VIII');
    });

    test('deve retornar IX quando o valor recebido for 9', () => {
      const result = converteParaAlgarismoRomano(9);

      expect(result).toEqual('IX');
    });

    test('deve retornar X quando o valor recebido for 10', () => {
      const result = converteParaAlgarismoRomano(10);

      expect(result).toEqual('X');
    });
  });
});
