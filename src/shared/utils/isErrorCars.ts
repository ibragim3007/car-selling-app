import { ICar, IErrorCars } from '../types';
import { isObject } from './isObject';

export const isErrorCars = (value: unknown): value is IErrorCars => {
  if (!isObject(value)) return false;

  return 'errors' in value && Array.isArray(value.errors) && 'results' in value && Array.isArray(value.results);
};

export const isCars = (value: unknown): value is ICar[] => {
  if (!isObject(value)) return false;

  return Array.isArray(value);
};
