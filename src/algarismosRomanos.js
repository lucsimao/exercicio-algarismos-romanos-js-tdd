const converteParaAlgarismoRomano = (numero) => {
  if (numero === 1) {
    return 'I';
  } else {
    if (numero === 2) {
      return 'II';
    }
  }
};

module.exports = { converteParaAlgarismoRomano };
