export const extrairAlgarismos = (number: number) => {
  let result: number[] = [];
  let auxiliar = number;

  for (; auxiliar > 0; ) {
    const restoDaDivisão = auxiliar % 10;
    result = [restoDaDivisão, ...result];
    auxiliar = Math.floor(auxiliar / 10);
  }

  return result;
};

export const calculaValorRealDoAlgarismo = (
  algarismo: number,
  ordem: number
) => {
  const result = algarismo * Math.pow(10, ordem);

  return result;
};
