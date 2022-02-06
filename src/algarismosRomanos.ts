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

  const algarismosExtraídosDoNumero = extrairAlgarismos(numero);

  let result = '';
  for (let i = 0; i < algarismosExtraídosDoNumero.length; i++) {
    const number = calculaValorRealDoAlgarismo(
      algarismosExtraídosDoNumero[i],
      algarismosExtraídosDoNumero.length - 1 - i
    );
    result = result + converte(algarismosRomanos, number);
  }
  return result;
};

const calculaValorRealDoAlgarismo = (algarismo: number, ordem: number) => {
  const result = algarismo * Math.pow(10, ordem);

  return result;
};

const extrairAlgarismos = (number: number) => {
  let algarismos: number[] = [];
  let result = number;
  while (result > 0) {
    const restDiv = result % 10;
    algarismos = [restDiv].concat(algarismos);
    result = Math.floor(result / 10);
  }

  return algarismos;
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
