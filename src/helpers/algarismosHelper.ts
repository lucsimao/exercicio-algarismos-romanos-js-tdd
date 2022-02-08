export const extrairAlgarismos = (number: number) => {
  let result: number[] = [];
  let auxiliar = number;

  for (let i = 0; auxiliar > 0; i++) {
    const restoDaDivisão = auxiliar % 10;
    const valorRealAlgarismo = restoDaDivisão * Math.pow(10, i);

    result = [valorRealAlgarismo, ...result];
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
