import { converteAlgarismo } from './services/converteAlgarismo';
import { extrairAlgarismos } from './helpers/algarismosHelper';

export const converteParaAlgarismoRomano = (numero: number) => {
  if (!numero) return 'INVALIDO';

  const algarismosExtraídos = extrairAlgarismos(numero);

  let result = '';
  for (const algarismo of algarismosExtraídos) {
    const algarismoRomano = converteAlgarismo(algarismo);
    result += algarismoRomano;
  }

  return result;
};

module.exports = { converteParaAlgarismoRomano };
