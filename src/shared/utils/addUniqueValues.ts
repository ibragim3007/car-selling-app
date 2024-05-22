// Chat GPT
export function addUniqueValues(array1: number[], array2: number[]): number[] {
  // Проходим по всем элементам второго массива
  array2.forEach(value => {
    // Если значение отсутствует в первом массиве, добавляем его
    if (!array1.includes(value)) {
      array1.push(value);
    }
  });
  return array1;
}
