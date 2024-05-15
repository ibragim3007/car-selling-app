import { BaseTypeDictionary } from '../types/dictionary.types';

export function compare<T extends BaseTypeDictionary>(dict: T[], id: number): string | undefined {
  return dict.find(d => d.id === id)?.name || undefined;
}
