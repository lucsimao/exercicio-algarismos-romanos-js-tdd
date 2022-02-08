const { converteParaAlgarismoRomano } = require('./algarismosRomanos');

describe('algarismosRomanos', () => {
  describe('converteParaAlgarismoRomano', () => {
    describe('Unidades', () => {
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
    });

    describe('dezenas', () => {
      test('deve retornar X quando o valor recebido for 10', () => {
        const result = converteParaAlgarismoRomano(10);

        expect(result).toEqual('X');
      });

      test('deve retornar XI quando o valor recebido for 11', () => {
        const result = converteParaAlgarismoRomano(11);

        expect(result).toEqual('XI');
      });

      test('deve retornar XII quando o valor recebido for 12', () => {
        const result = converteParaAlgarismoRomano(12);

        expect(result).toEqual('XII');
      });

      test('deve retornar XIII quando o valor recebido for 13', () => {
        const result = converteParaAlgarismoRomano(13);

        expect(result).toEqual('XIII');
      });

      test('deve retornar XIV quando o valor recebido for 14', () => {
        const result = converteParaAlgarismoRomano(14);

        expect(result).toEqual('XIV');
      });

      test('deve retornar XV quando o valor recebido for 15', () => {
        const result = converteParaAlgarismoRomano(15);

        expect(result).toEqual('XV');
      });

      test('deve retornar XVI quando o valor recebido for 16', () => {
        const result = converteParaAlgarismoRomano(16);

        expect(result).toEqual('XVI');
      });

      test('deve retornar XVII quando o valor recebido for 17', () => {
        const result = converteParaAlgarismoRomano(17);

        expect(result).toEqual('XVII');
      });

      test('deve retornar XVIII quando o valor recebido for 18', () => {
        const result = converteParaAlgarismoRomano(18);

        expect(result).toEqual('XVIII');
      });

      test('deve retornar XIX quando o valor recebido for 19', () => {
        const result = converteParaAlgarismoRomano(19);

        expect(result).toEqual('XIX');
      });

      test('deve retornar XX quando o valor recebido for 20', () => {
        const result = converteParaAlgarismoRomano(20);

        expect(result).toEqual('XX');
      });
    });

    describe('cinquenta', () => {
      test('deve retornar XL quando o valor recebido for 40', () => {
        const result = converteParaAlgarismoRomano(40);

        expect(result).toEqual('XL');
      });

      test('deve retornar XLI quando o valor recebido for 41', () => {
        const result = converteParaAlgarismoRomano(41);

        expect(result).toEqual('XLI');
      });

      test('deve retornar XLV quando o valor recebido for 45', () => {
        const result = converteParaAlgarismoRomano(45);

        expect(result).toEqual('XLV');
      });

      test('deve retornar L quando o valor recebido for 50', () => {
        const result = converteParaAlgarismoRomano(50);

        expect(result).toEqual('L');
      });

      test('deve retornar LX quando o valor recebido for 60', () => {
        const result = converteParaAlgarismoRomano(60);

        expect(result).toEqual('LX');
      });
    });

    describe('cem', () => {
      test('deve retornar XC quando o valor recebido for 90', () => {
        const result = converteParaAlgarismoRomano(90);

        expect(result).toEqual('XC');
      });

      test('deve retornar LXXIII quando o valor recebido for 73', () => {
        const result = converteParaAlgarismoRomano(73);

        expect(result).toEqual('LXXIII');
      });

      test('deve retornar C quando o valor recebido for 100', () => {
        const result = converteParaAlgarismoRomano(100);

        expect(result).toEqual('C');
      });
    });

    describe('quinhentos', () => {
      test('deve retornar CDXX quando o valor recebido for 420', () => {
        const result = converteParaAlgarismoRomano(420);

        expect(result).toEqual('CDXX');
      });

      test('deve retornar CD quando o valor recebido for 400', () => {
        const result = converteParaAlgarismoRomano(400);

        expect(result).toEqual('CD');
      });

      test('deve retornar CDXC quando o valor recebido for 490', () => {
        const result = converteParaAlgarismoRomano(490);

        expect(result).toEqual('CDXC');
      });

      test('deve retornar D quando o valor recebido for 500', () => {
        const result = converteParaAlgarismoRomano(500);

        expect(result).toEqual('D');
      });
    });

    describe('mil', () => {
      test('deve retornar M quando o valor recebido for 1000', () => {
        const result = converteParaAlgarismoRomano(1000);

        expect(result).toEqual('M');
      });

      test('deve retornar MCMLXXXIII quando o valor recebido for 1983', () => {
        const result = converteParaAlgarismoRomano(1983);

        expect(result).toEqual('MCMLXXXIII');
      });

      test('deve retornar MCMXCI quando o valor recebido for 1991', () => {
        const result = converteParaAlgarismoRomano(1991);

        expect(result).toEqual('MCMXCI');
      });

      test('deve retornar MMMCCCXXXIII quando o valor recebido for 3333', () => {
        const result = converteParaAlgarismoRomano(3333);

        expect(result).toEqual('MMMCCCXXXIII');
      });

      test('deve retornar MMMCMXCIX quando o valor recebido for 3999', () => {
        const result = converteParaAlgarismoRomano(3999);

        expect(result).toEqual('MMMCMXCIX');
      });
    });
  });
});
