import ToggleButton, { IItem } from '@/components/Controllers/buttons/ToggleButton';
import CardTitle from '@/components/Wrappers/CardTitle';
import React, { useState } from 'react';
import ButtonRoute from './ButtonRoute';

const options = [
  {
    title: 'VIN',
    value: 'VIN',
  },
  {
    title: 'Госномер',
    value: 'госномер',
  },
  {
    title: 'Номер кузова',
    value: 'номер кузова',
  },
];

const CheckAutoInput = () => {
  const [currentValue, setCurrentValue] = useState<IItem>({ title: 'Vin', value: 'VIN' });
  const onChange = (item: IItem) => {
    setCurrentValue(item);
  };
  return (
    <CardTitle borderRadius={16} title="Проверка истории авто">
      <ToggleButton value={currentValue} onChange={onChange} items={options} />
      <ButtonRoute item={currentValue} />
    </CardTitle>
  );
};

export default CheckAutoInput;
