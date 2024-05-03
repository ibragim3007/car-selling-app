import BottomSheetInput from '@/components/Controllers/Input/BottomSheetInput';
import CardTitle from '@/components/Wrappers/CardTitle';
import Divider from '@/shared/ui/divider/Divider';

import React from 'react';

const GeneralInfo = () => {
  return (
    <CardTitle title="Основная информация" borderRadius={16}>
      <BottomSheetInput name="name" title="Имя" value={'Иван'} />
      <Divider />
      <BottomSheetInput name="lastname" title="Фамилия" value={'Иванов'} />
      <Divider />
      <BottomSheetInput title="Компания" value={'Частное лицо'} />
    </CardTitle>
  );
};

export default GeneralInfo;
