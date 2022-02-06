const algarismosRomanos = {
  ['I']: 1,
  ['V']: 5,
  ['X']: 10,
  ['L']: 50,
  ['C']: 100,
  ['D']: 500,
  ['M']: 1000,
};

const converteParaAlgarismoRomano = (numero) => {
  if (!numero) return 'INVALIDO';

  return converte(algarismosRomanos, numero);
};

const converte = (collection, numero) => {
  if (!numero) {
    return '';
  }

  const keys = Object.keys(collection);

  let key;
  const accKeys = {};
  for (key of keys) {
    if (numero === collection[key]) {
      return key;
    }
    if (numero > collection[key]) accKeys[key] = collection[key];
    if (numero < collection[key]) break;
  }

  const algarism = key || 'I';
  const rest = collection[key] || 1;
  const number = numero - rest;

  if (numero < collection[key]) {
    const ks = Object.keys(accKeys);
    for (accKey of ks) {
      const diff = collection[key] - numero;
      if (diff === accKeys[accKey]) {
        return converte(accKeys, diff) + algarism;
      }
    }
    return converte(accKeys, numero);
  }

  return algarism + converte(collection, number);
};

module.exports = { converteParaAlgarismoRomano };
