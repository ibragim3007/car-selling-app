export function convertNumberToSliderView(value: number): string {
  if (value < 0) return value.toString().slice(0, 4);
  if (value > 0) return `+${value.toString().slice(0, 3)}`;

  return value.toString();
}
