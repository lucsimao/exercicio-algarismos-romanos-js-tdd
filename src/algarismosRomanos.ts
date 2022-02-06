import {
  calculaValorRealDoAlgarismo,
  extrairAlgarismos,
} from './helpers/algarismosHelper';

import { algarismosRomanos } from './mapas/MapaAlgarismosRomanos';
import { converteAlgarismo } from './services/converteAlgarismo';

const converteAlgarismoIndividual = (algarismo: number, ordem: number) => {
  const number = calculaValorRealDoAlgarismo(algarismo, ordem);
  const result = converteAlgarismo(algarismosRomanos, number);

  return result;
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

module.exports = { converteParaAlgarismoRomano };
