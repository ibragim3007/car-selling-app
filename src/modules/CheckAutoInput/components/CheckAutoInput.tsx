import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import CardTitle from '@/components/Wrappers/CardTitle';
import React, { useState } from 'react';
import ButtonRoute from './ButtonRoute';

type TOptions = {
  title: string;
  value: string;
};

export const options: TOptions[] = [
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

export const CheckAutoInput = () => {
  const [currentValue, setCurrentValue] = useState<TOptions>({ title: 'Vin', value: 'VIN' });
  const onChange = (item: TOptions) => {
    setCurrentValue(item);
  };
  return (
    <CardTitle borderRadius={16} title="Проверка истории авто">
      <ToggleButton<TOptions>
        items={options}
        Item={(item, index) => (
          <ToggleButtonItem<TOptions>
            onPress={onChange}
            key={item.value}
            currentValue={currentValue.value}
            title={item.title}
            item={item}
            index={index}
            length={options.length}
            value={item.value}
          />
        )}
      />

      <ButtonRoute item={currentValue} />
    </CardTitle>
  );
};
