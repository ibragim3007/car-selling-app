import { IEnum } from '../constants/enums/Car';

export const enumCompare = (enumV: IEnum[], id: number | null) => {
  const res = enumV.find(en => en.id === id);

  if (!res) return '';

  if ('name' in res && typeof res.name === 'string') {
    return res.name;
  }

  if ('text' in res) {
    return res.text;
  }
};
