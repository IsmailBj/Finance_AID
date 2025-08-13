import { Dispatch, SetStateAction } from "react";

export const normalizeDate = (dateStr: string): Date => {
  const date = new Date(dateStr);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const calculateInstallment = (
  amount: number,
  frequency: string,
  setter: Dispatch<SetStateAction<string>>
): void => {
  if (amount >= 0) {
    switch (frequency) {
      case "monthly":
        setter(String(amount / 12));
        break;
      case "weekly":
        setter(String(amount / 52));
        break;
      default:
        setter(String(amount));
        break;
    }
  } else {
    setter("0");
  }
};

export default calculateInstallment;
