import HighlightText from '@/components/Informers/HighlightText';
import CardTitle from '@/components/Wrappers/CardTitle';
import React from 'react';

const Advantages = () => {
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
