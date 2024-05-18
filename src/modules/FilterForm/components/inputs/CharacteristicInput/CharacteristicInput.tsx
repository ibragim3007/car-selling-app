import GISRange from '@/components/Controllers/Input/Select/GISRange';
import GoInButton from '@/components/Controllers/buttons/GoInButton';
import { ENGINE_POWER_MOCK, ENGINE_VOLUME_MOCK, MANUFACTURE_YEAR_MOCK } from '@/shared/constants/enums/RangeValues';
import React from 'react';
import WrapperBlock from '../../wrapper/WrapperBlock';

const CharacteristicInput = () => {
  return (
    <WrapperBlock>
      <GISRange title="Год выпуска" dataMock={MANUFACTURE_YEAR_MOCK} name="years" />
      <GISRange title="Объем двигателя, л" dataMock={ENGINE_VOLUME_MOCK} name="iceValues" />
      <GISRange title="Мощность, л.с." dataMock={ENGINE_POWER_MOCK} name="horsepower" />
      <GoInButton title="Руль" isDivider />
      <GoInButton title="Коробка" isDivider />
      <GoInButton title="Тип топлива" isDivider />
      <GoInButton title="Привод" />
    </WrapperBlock>
  );
};

export default CharacteristicInput;
