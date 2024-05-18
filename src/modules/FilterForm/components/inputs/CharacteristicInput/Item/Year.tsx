import GISRange from '@/components/Controllers/Input/Select/GISRange';
import { MANUFACTURE_YEAR_MOCK } from '@/shared/constants/enums/RangeValues';
import React from 'react';
const Year = () => {
  return <GISRange title="Год выпуска" dataMock={MANUFACTURE_YEAR_MOCK} name="years" />;
};

export default Year;
