const algarismosRomanos = ['I', 'I', 'V', 'X'];

const converteParaAlgarismoRomano = (numero) => {
  if (!numero) return 'INVALIDO';

  const quocienteDivisao = Math.floor(numero / 5);
  const restoDivisao = numero % 5;

  if (restoDivisao === 0) return algarismosRomanos[quocienteDivisao + 1];
  if (restoDivisao === 4)
    return (
      algarismosRomanos[quocienteDivisao] +
      algarismosRomanos[quocienteDivisao + 2]
    );

  let result = quocienteDivisao ? algarismosRomanos[quocienteDivisao + 1] : '';
  for (let i = 0; i < restoDivisao; i++) {
    result = result + algarismosRomanos[quocienteDivisao];
  }
  return result;
};

module.exports = { converteParaAlgarismoRomano };
