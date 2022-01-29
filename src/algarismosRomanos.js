const algarismosRomanos = ['I', 'II', 'III'];

const converteParaAlgarismoRomano = (numero) => {
  return algarismosRomanos[numero - 1];
};

module.exports = { converteParaAlgarismoRomano };
