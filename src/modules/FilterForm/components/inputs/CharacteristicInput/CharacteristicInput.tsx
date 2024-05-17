import GoInButton from '@/components/Controllers/buttons/GoInButton';
import React from 'react';
import WrapperBlock from '../../wrapper/WrapperBlock';
import Year from './Item/Year';

const CharacteristicInput = () => {
  return (
    <WrapperBlock>
      <Year />
      <GoInButton title="Объем двигателя, л" isDivider />
      <GoInButton title="Мощность, л.с." isDivider />
      <GoInButton title="Руль" isDivider />
      <GoInButton title="Коробка" isDivider />
      <GoInButton title="Тип топлива" isDivider />
      <GoInButton title="Привод" />
    </WrapperBlock>
  );
};

export default CharacteristicInput;
