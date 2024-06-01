import { useState, useEffect } from 'react';

/**
 * useDebounce - хук для задержки выполнения функции.
 *
 * @param value - Значение, которое будет дебаунситься.
 * @param delay - Время задержки в миллисекундах.
 * @returns Дебаунснутое значение.
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Очищаем таймаут, если значение или задержка изменяются
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
