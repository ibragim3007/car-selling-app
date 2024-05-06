import HighlightText from '@/components/Informers/HighlightText';
import CardTitle from '@/components/Wrappers/CardTitle';
import { ICar, ICarBig } from '@/shared/types';
import React from 'react';

interface AdvantagesProps {
  car: ICarBig;
}

const Advantages = ({ car }: AdvantagesProps) => {
  return (
    <CardTitle title="Преимущества">
      <HighlightText variant="footnote">Характеристики совпадают с ПТС</HighlightText>
      <HighlightText variant="footnote">Нет наложенных ограничений</HighlightText>
      <HighlightText variant="footnote">Не числится в розыске</HighlightText>
      <HighlightText variant="footnote" color="primary">
        4 записи о регистрации
      </HighlightText>
    </CardTitle>
  );
};

export default Advantages;
