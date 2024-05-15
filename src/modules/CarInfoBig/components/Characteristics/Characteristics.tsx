import RowInfo from '@/components/Informers/RowInfo';
import CardTitle from '@/components/Wrappers/CardTitle';
import { transmissionsAdditional, wheels } from '@/shared/constants/enums/Car';
import { compare } from '@/shared/helpers/compare';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { formatToMillage } from '@/shared/helpers/formatMileage';
import { ICarBig } from '@/shared/types';
import { IDictionaryRoot } from '@/shared/types/dictionary.types';
import React from 'react';

interface CharacteristicsProps {
  car: ICarBig;
  dict?: IDictionaryRoot;
}

const Characteristics = ({ car, dict }: CharacteristicsProps) => {
  return (
    <CardTitle borderRadius={8} title={'Характеристики'} isNoPadding>
      <RowInfo title={'Поколение'} value={car.generation} isEven={false} />
      <RowInfo title={'Год выпуска'} value={car.year} isEven={true} />
      <RowInfo title={'Пробег'} value={formatToMillage(car.mileage)} isEven={false} />
      <RowInfo title={'Кузов'} value={car.body} isEven={true} />
      <RowInfo title={'Цвет'} value={car.color} isEven={false} />
      <RowInfo
        title={'Двигатель (тип)'}
        value={`${car.volume || '---'} / ${car.horsepower || '---'} / ${car.engine || '---'}`}
        isEven={true}
      />
      <RowInfo title={'КПП'} value={enumCompare(transmissionsAdditional, car.transmission)} isEven={false} />
      <RowInfo title={'Привод'} value={compare(dict!.gears, car.drive)} isEven={true} />
      {car.wheel !== undefined && <RowInfo title={'Руль'} value={enumCompare(wheels, car.wheel)} isEven={false} />}
      <RowInfo title={'Состояние'} value={car.remont} isEven={true} />
      <RowInfo title={'Владельцы'} value={car.ownerCount} isEven={false} />
    </CardTitle>
  );
};

export default Characteristics;
