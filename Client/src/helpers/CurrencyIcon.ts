const CurrencyAmount = (currency_type: string): string => {
  switch (currency_type) {
    case "EURO":
      return "€";
    case "USD":
      return "$";
    case "MKD":
      return "MKD";
    default:
      break;
  }

  return "Nun";
};

export default CurrencyAmount;
