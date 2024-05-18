import { ENGINE_POWER_MOCK, ENGINE_VOLUME_MOCK, MANUFACTURE_YEAR_MOCK } from '@/shared/constants/enums/RangeValues';
import React from 'react';
import WrapperBlock from '../../wrapper/WrapperBlock';
import GISLIst from '@/components/Controllers/Input/Select/GISLIst';
import GISRange from '@/components/Controllers/Input/Select/SelectRanges/GISRange';

const CharacteristicInput = () => {
  return (
    <WrapperBlock>
      <GISRange bottomSheetTitle="Год" title="Год выпуска" dataMock={MANUFACTURE_YEAR_MOCK} name="years" />
      <GISRange
        bottomSheetTitle="Объем двигателя"
        title="Объем двигателя, л"
        dataMock={ENGINE_VOLUME_MOCK}
        name="iceValues"
      />
      <GISRange bottomSheetTitle="Мощность" title="Мощность, л.с." dataMock={ENGINE_POWER_MOCK} name="horsepower" />
      <GISLIst />
      {/* <GoInButton bottomSheetTitle="Руль" title="Руль" isDivider />
      <GoInButton bottomSheetTitle="Коробка" title="Коробка" isDivider />
      <GoInButton bottomSheetTitle="Тип топлива" title="Тип топлива" isDivider />
      <GoInButton bottomSheetTitle="Привод" title="Привод" /> */}
    </WrapperBlock>
  );
};

export default CharacteristicInput;
