// Chat GPT
export function removeMatchingValues(array1: number[], array2: number[]): number[] {
  return array1.filter(value => !array2.includes(value));
}
