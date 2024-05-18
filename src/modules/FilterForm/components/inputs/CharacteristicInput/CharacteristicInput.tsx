import { ENGINE_POWER_MOCK, ENGINE_VOLUME_MOCK, MANUFACTURE_YEAR_MOCK } from '@/shared/constants/enums/RangeValues';
import React from 'react';
import WrapperBlock from '../../wrapper/WrapperBlock';
import GISLIst from '@/components/Controllers/Input/Select/GISLIst';
import GISRange from '@/components/Controllers/Input/Select/SelectRanges/GISRange';
import { gears, ices, transmissions, wheels } from '@/shared/constants/enums/Car';

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
      <GISLIst name={'wheels'} title={'Руль'} items={wheels} />
      <GISLIst name={'transmissions'} title={'Коробка'} items={transmissions} />
      <GISLIst name={'ices'} title={'Тип топлива'} items={ices} />
      <GISLIst name={'gears'} title={'Привод'} items={gears} />
    </WrapperBlock>
  );
};

export default CharacteristicInput;
