export function createAscendingArray(n: number): number[] {
  if (n <= 0) {
    return []; // Если число меньше или равно нулю, возвращаем пустой массив
  }

  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}

// Пример использования
// const number = 5;
// const ascendingArray = createAscendingArray(number);

// console.log(ascendingArray); // [1, 2, 3, 4, 5]
