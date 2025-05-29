import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { LocalStorageKeys } from "..";
import type { Place } from "~/api/interfaces/leaderboard";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOrdinalSuffix(number: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;

  return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function saveToLocalStorage(key: LocalStorageKeys, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key: LocalStorageKeys) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export const sortItems = ({
  arr,
  key,
  order,
}: {
  arr: Place[];
  key?: "Place" | "Club";
  order?: "asc" | "desc";
}): Place[] => {
  if (!key || !order) return arr;

  return [...arr].sort((a, b) => {
    let comparison = 0;

    switch (key) {
      case "Place":
        comparison = a.rank - b.rank;
        break;
      case "Club":
        comparison = a.team.name
          .trim()
          .toLowerCase()
          .localeCompare(b.team.name.trim().toLowerCase(), undefined, {
            sensitivity: "base",
          });
        break;
    }

    return order === "desc" ? -comparison : comparison;
  });
};
