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
  const ultimoÍndiceDoArrayDeAlgarismos =
    algarismosExtraídosDoNumero.length - 1;
  for (let i = 0; i <= ultimoÍndiceDoArrayDeAlgarismos; i++) {
    const novoAlgarismo = converteAlgarismoIndividual(
      algarismosExtraídosDoNumero[i],
      ultimoÍndiceDoArrayDeAlgarismos - i
    );
    result = result + novoAlgarismo;
  }

  return result;
};

const converteAlgarismoIndividual = (algarismo: number, ordem: number) => {
  const number = calculaValorRealDoAlgarismo(algarismo, ordem);
  const result = converte(algarismosRomanos, number);

  return result;
};

const calculaValorRealDoAlgarismo = (algarismo: number, ordem: number) => {
  const result = algarismo * Math.pow(10, ordem);

  return result;
};

const extrairAlgarismos = (number: number) => {
  let result: number[] = [];
  let auxiliar = number;

  for (; auxiliar > 0; ) {
    const restoDaDivisão = auxiliar % 10;
    result = [restoDaDivisão, ...result];
    auxiliar = Math.floor(auxiliar / 10);
  }

  return result;
};

const converte = (coleção: Collection, numero: number): string => {
  if (!numero) return '';

  const chavesDaCollection = Object.keys(coleção);

  let chave: string = '';
  const accKeys: Collection = {};
  for (chave of chavesDaCollection) {
    if (numero === coleção[chave]) {
      return chave;
    }
    if (numero > coleção[chave]) accKeys[chave] = coleção[chave];
    if (numero < coleção[chave]) break;
  }

  const algarism = chave || 'I';
  const rest = coleção[chave] || 1;
  const number = numero - rest;

  if (numero < coleção[chave]) {
    const ks = Object.keys(accKeys);
    for (let accKey of ks) {
      const diff = coleção[chave] - numero;
      if (diff === accKeys[accKey]) {
        return converte(accKeys, diff) + algarism;
      }
    }
    return converte(accKeys, numero);
  }

  return algarism + converte(coleção, number);
};

module.exports = { converteParaAlgarismoRomano };
