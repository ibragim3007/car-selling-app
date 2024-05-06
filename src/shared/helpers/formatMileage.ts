export const formatNumber = (x: number, delimiter?: string) => {
  return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || ' ');
};

export const formatToMillage = (x: number) => {
  if (!x) return '---';
  return `${formatNumber(x)} км`;
};
