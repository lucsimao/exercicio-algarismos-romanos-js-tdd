import { Collection } from '../interfaces/Collection';
import { algarismosRomanos } from './../mapas/MapaAlgarismosRomanos';

export const converteAlgarismo = (
  numero: number,
  coleção: Collection = algarismosRomanos
): string => {
  if (!numero) return '';

  const { chave, chavesAtuais } = processaAlgarismoIgual(numero, coleção);

  const chaveAntes = processaAlgarismoAntesDoMaior(
    coleção,
    chave,
    numero,
    chavesAtuais
  );

  return chaveAntes || processaAlgarismoDepois(chave, coleção, numero);
};

const processaAlgarismoIgual = (
  numero: number,
  coleção: Collection
): { chave: string; chavesAtuais: Collection } => {
  const chavesDaCollection = Object.keys(coleção);
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
  coleção: Collection,
  chave: string,
  numero: number,
  chavesAtuais: Collection
) => {
  if (numero < coleção[chave]) {
    const algarismoRomano = chave || 'I';
    const chavesAuxiliares = Object.keys(coleção);
    for (let chaveAuxiliar of chavesAuxiliares) {
      const diferença = coleção[chave] - numero;
      if (diferença === coleção[chaveAuxiliar]) {
        return converteAlgarismo(diferença, coleção) + algarismoRomano;
      }
    }
    return converteAlgarismo(numero, chavesAtuais);
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

  return algarismoRomano + converteAlgarismo(diferençaDoNumero, coleção);
};
