export function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  // Объединяем два массива и удаляем дубликаты
  const mergedArray = [...arr1, ...arr2.filter(item => !arr1.includes(item))];
  // Сортируем объединенный массив

  return mergedArray;
}
