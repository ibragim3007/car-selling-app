export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 3, currency: 'RUB', style: 'currency' }).format(
    price,
  );
};

export function formatCurrency(price: number) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
  });

  if (price >= 1000000000) {
    return formatter.format(price / 1000000000) + ' млрд. ₽';
  } else if (price >= 1000000) {
    return formatter.format(price / 1000000) + ' млн. ₽';
  } else if (price >= 1000) {
    return formatter.format(price / 1000) + ' тыс. ₽';
  } else {
    return formatter.format(price) + ' ₽';
  }
}
