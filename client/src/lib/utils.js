import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
  return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export const futuristicColors = {
  primary: "#00FFFF",
  secondary: "#FF00FF",
  accent: "#FFFF00",
  background: "#0A0A0A",
  text: "#FFFFFF",
}