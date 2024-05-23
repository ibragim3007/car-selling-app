export function moveFirstElementToEnd<T>(arr: T[]): T[] {
  if (arr.length === 0) {
    return arr; // Если массив пустой, возвращаем его как есть
  }
  return [...arr.slice(1), arr[0]];
}
