export const formatBRCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatCpf = (cpf: string | number): string => {
  const cpfString = String(cpf).replace(/\D/g, "");

  if (cpfString.length !== 11) {
    return String(cpf);
  }

  return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
