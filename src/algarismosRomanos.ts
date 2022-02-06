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
  const chavesAtuais: Collection = {};
  for (chave of chavesDaCollection) {
    if (numero === coleção[chave]) {
      return chave;
    }
    if (numero > coleção[chave]) chavesAtuais[chave] = coleção[chave];
    if (numero < coleção[chave]) break;
  }

  const algarismoRomano = chave || 'I';

  if (numero < coleção[chave]) {
    const chavesAuxiliares = Object.keys(chavesAtuais);
    for (let chaveAuxiliar of chavesAuxiliares) {
      const diferença = coleção[chave] - numero;
      if (diferença === chavesAtuais[chaveAuxiliar]) {
        return converte(chavesAtuais, diferença) + algarismoRomano;
      }
    }
    return converte(chavesAtuais, numero);
  }
  const valorDoAlgarismo = coleção[chave] || 1;
  const diferençaDoNumero = numero - valorDoAlgarismo;

  return algarismoRomano + converte(coleção, diferençaDoNumero);
};

module.exports = { converteParaAlgarismoRomano };
