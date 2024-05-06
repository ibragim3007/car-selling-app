import RowInfo from '@/components/Informers/RowInfo';
import CardTitle from '@/components/Wrappers/CardTitle';
import { formatToMillage } from '@/shared/helpers/formatMileage';
import { ICarBig } from '@/shared/types';
import React from 'react';

interface CharacteristicsProps {
  car: ICarBig;
}

const Characteristics = ({ car }: CharacteristicsProps) => {
  return (
    <CardTitle borderRadius={8} title={'Характеристики'} isNoPadding>
      <RowInfo title={'Поколение'} value={'200 рестайлинг (2012-2015)'} isEven={false} />
      <RowInfo title={'Год выпуска'} value={car.year} isEven={true} />
      <RowInfo title={'Пробег'} value={formatToMillage(car.mileage)} isEven={false} />
      <RowInfo title={'Кузов'} value={car.body} isEven={true} />
      <RowInfo title={'Цвет'} value={car.color} isEven={false} />
      <RowInfo
        title={'Двигатель (тип)'}
        value={`${car.volume || '---'} / ${car.horsepower || '---'} / ${car.engine || '---'}`}
        isEven={true}
      />
      <RowInfo title={'КПП'} value={'---'} isEven={false} />
      <RowInfo title={'Привод'} value={'---'} isEven={true} />
      <RowInfo title={'Руль'} value={car.wheel} isEven={false} />
      <RowInfo title={'Состояние'} value={car.remont} isEven={true} />
      <RowInfo title={'Владельцы'} value={car.ownerCount} isEven={false} />
    </CardTitle>
  );
};

export default Characteristics;
