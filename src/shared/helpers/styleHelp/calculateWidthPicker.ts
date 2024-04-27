import { DimensionValue } from 'react-native';

export const calculateWidthPicker = (elementsAmount: number, offset = 0): DimensionValue => {
  return `${100 / elementsAmount}%`;
};

export const calculateCurrentPosition = (elementsAmount: number, currentIndex: number, offset = 0): DimensionValue => {
  return `${(100 / elementsAmount + offset) * currentIndex}%`;
};

export const calculatePercantageOfWidth = (blockWidth: number, amount: number) => {
  console.log((amount * 100) / blockWidth);
  return (amount * 100) / blockWidth;
};
