import RowInfo from '@/components/Informers/RowInfo';
import CardTitle from '@/components/Wrappers/CardTitle';
import React from 'react';

const Characteristics = () => {
  return (
    <CardTitle borderRadius={8} title={'Характеристики'} isNoPadding>
      <RowInfo title={'Поколение'} value={'200 рестайлинг (2012-2015)'} isEven={false} />
      <RowInfo title={'Год выпуска'} value={'2012'} isEven={true} />
      <RowInfo title={'Пробег'} value={'205 000 км'} isEven={false} />
      <RowInfo title={'Кузов'} value={'Внедорожник'} isEven={true} />
      <RowInfo title={'Цвет'} value={'Черный'} isEven={false} />
      <RowInfo title={'Двигатель (тип)'} value={'4.5 / 235 / Дизель'} isEven={true} />
      <RowInfo title={'КПП'} value={'Автоматическая'} isEven={false} />
      <RowInfo title={'Привод'} value={'Полный'} isEven={true} />
      <RowInfo title={'Руль'} value={'Левый'} isEven={false} />
      <RowInfo title={'Состояние'} value={'Не требует ремонта'} isEven={true} />
      <RowInfo title={'Владельцы'} value={3} isEven={false} />
    </CardTitle>
  );
};

export default Characteristics;
