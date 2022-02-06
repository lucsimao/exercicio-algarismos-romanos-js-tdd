import { Collection } from './../interfaces/Collection';
export const converteAlgarismo = (
  coleção: Collection,
  numero: number
): string => {
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
        return converteAlgarismo(chavesAtuais, diferença) + algarismoRomano;
      }
    }
    return converteAlgarismo(chavesAtuais, numero);
  }
  const valorDoAlgarismo = coleção[chave] || 1;
  const diferençaDoNumero = numero - valorDoAlgarismo;

  return algarismoRomano + converteAlgarismo(coleção, diferençaDoNumero);
};
