import { formatNumber } from './formatMileage';

export function inputPlaceholderText(firstValue: number, secondValue: number, subtitleInput?: string) {
  if (firstValue === 0 || secondValue === 0) return 'Неважно';
  else if (firstValue !== 0 && secondValue !== 0)
    return `${formatNumber(firstValue)} – ${formatNumber(secondValue)} ${subtitleInput ? subtitleInput : ''}`;
}
