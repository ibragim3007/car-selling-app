import RowInfo from '@/components/Informers/RowInfo';
import CardTitle from '@/components/Wrappers/CardTitle';
import React from 'react';

const SimilarCars = () => {
  return (
    <CardTitle title="Похожие авто" isNoPadding mt={16}>
      <RowInfo title={'Max цена'} value={'4 000 000 ₽'} isEven={false} />
      <RowInfo title={'Min цена'} value={'3 613 285 ₽'} isEven={true} />
      <RowInfo title={'Цена в регионе'} value={'3 613 285 ₽'} isEven={false} />
      <RowInfo title={'Цена в городе'} value={'3 120 000 ₽'} isEven={true} />
      <RowInfo title={'Средний пробег'} value={'3 613 285 ₽'} isEven={false} />
    </CardTitle>
  );
};

export default SimilarCars;
