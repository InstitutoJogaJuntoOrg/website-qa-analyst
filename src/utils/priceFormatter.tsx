export function FormataMoeda(valor: string) {
    let onlyDigits = valor
      .split("")
      .filter((s: string) => /\d/.test(s))
      .join("")
      .padStart(3, "0");
    if (onlyDigits.slice(0, -2) == "00")
      onlyDigits = onlyDigits.slice(1, onlyDigits.length);
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
    if (parseFloat(digitsFloat) > 0.9)
      return parseFloat(digitsFloat).toFixed(2).toString();
    else return digitsFloat;
  }

  export function MaskCurrency(valor: number, locale = "pt-BR", currency = "BRL") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(valor);
  }