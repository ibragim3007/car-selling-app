export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 3, currency: 'RUB', style: 'currency' }).format(
    price,
  );
};

export function formatCurrency(price: number) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
  });

  const formatPrice = (value: number, unit: string) => formatter.format(value) + ` ${unit} ₽`;

  if (Math.abs(price) >= 1000000000) {
    return formatPrice(price / 1000000000, 'млрд.');
  } else if (Math.abs(price) >= 1000000) {
    return formatPrice(price / 1000000, 'млн.');
  } else if (Math.abs(price) >= 1000) {
    return formatPrice(price / 1000, 'тыс.');
  } else {
    return formatPrice(price, '');
  }
}
