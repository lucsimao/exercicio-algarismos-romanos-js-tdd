import { Collection } from '../interfaces/Collection';

export const converteAlgarismo = (
  coleção: Collection,
  numero: number
): string => {
  if (!numero) return '';

  const chavesDaCollection = Object.keys(coleção);

  const { chave, chavesAtuais } = processaAlgarismoIgual(
    chavesDaCollection,
    numero,
    coleção
  );

  if (numero < coleção[chave]) {
    const algarismoAntesDoMaior = processaAlgarismoAntesDoMaior(
      chavesAtuais,
      coleção,
      chave,
      numero
    );

    return algarismoAntesDoMaior || converteAlgarismo(chavesAtuais, numero);
  }

  return processaAlgarismoDepois(chave, coleção, numero);
};

const processaAlgarismoIgual = (
  chavesDaCollection: string[],
  numero: number,
  coleção: Collection
): { chave: string; chavesAtuais: Collection } => {
  const chavesAtuais: Collection = {};
  let chave: string = '';
  for (chave of chavesDaCollection) {
    if (numero === coleção[chave]) {
      return { chave, chavesAtuais };
    }
    if (numero > coleção[chave]) {
      chavesAtuais[chave] = coleção[chave];
    }
    if (numero < coleção[chave]) break;
  }

  return { chave, chavesAtuais };
};

const processaAlgarismoAntesDoMaior = (
  chavesAtuais: Collection,
  coleção: Collection,
  chave: string,
  numero: number
) => {
  const algarismoRomano = chave || 'I';
  const chavesAuxiliares = Object.keys(chavesAtuais);
  for (let chaveAuxiliar of chavesAuxiliares) {
    const diferença = coleção[chave] - numero;
    if (diferença === chavesAtuais[chaveAuxiliar]) {
      return converteAlgarismo(chavesAtuais, diferença) + algarismoRomano;
    }
  }
  return null;
};

const processaAlgarismoDepois = (
  chave: string,
  coleção: Collection,
  numero: number
) => {
  const algarismoRomano = chave || 'I';
  const valorDoAlgarismo = coleção[chave] || 1;
  const diferençaDoNumero = numero - valorDoAlgarismo;

  return algarismoRomano + converteAlgarismo(coleção, diferençaDoNumero);
};
