import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (number: string) => {
  const formattedNumber = Number(number).toLocaleString("en-US", {});

  return formattedNumber;
};
