import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getOrdinalSuffix(number: number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;

    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
