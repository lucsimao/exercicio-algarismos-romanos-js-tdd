export interface Collection {
  [key: string]: number;
}
const algarismosRomanos: Collection = {
  ['I']: 1,
  ['V']: 5,
  ['X']: 10,
  ['L']: 50,
  ['C']: 100,
  ['D']: 500,
  ['M']: 1000,
};

export const converteParaAlgarismoRomano = (numero: number) => {
  if (!numero) return 'INVALIDO';

  return converte(algarismosRomanos, numero);
};

const converte = (collection: Collection, numero: number): string => {
  if (!numero) {
    return '';
  }

  const keys = Object.keys(collection);

  let key: string = '';
  const accKeys: Collection = {};
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
    for (let accKey of ks) {
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
