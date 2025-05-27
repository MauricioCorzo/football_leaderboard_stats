import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { LocalStorageKeys } from "..";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOrdinalSuffix(number: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;

  return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

//sleep function to simulate delay
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Función para guardar datos en localStorage
export function saveToLocalStorage(key: LocalStorageKeys, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Función para obtener datos de localStorage
export function getFromLocalStorage(key: LocalStorageKeys) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
