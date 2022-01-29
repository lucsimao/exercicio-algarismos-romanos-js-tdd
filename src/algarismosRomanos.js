const algarismosRomanos = [
  'INVALIDO',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
];

const converteParaAlgarismoRomano = (numero) => {
  return algarismosRomanos[numero];
};

module.exports = { converteParaAlgarismoRomano };
