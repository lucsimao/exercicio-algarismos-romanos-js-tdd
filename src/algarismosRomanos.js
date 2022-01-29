const algarismosRomanos = ['INVALIDO', 'I', 'II', 'III', 'IV', 'V', 'VI'];

const converteParaAlgarismoRomano = (numero) => {
  return algarismosRomanos[numero];
};

module.exports = { converteParaAlgarismoRomano };
