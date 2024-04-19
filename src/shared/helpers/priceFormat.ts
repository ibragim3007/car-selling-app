export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 3, currency: 'RUB', style: 'currency' }).format(
    price,
  );
};
