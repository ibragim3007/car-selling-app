import BottomSheetInput from '@/components/Controllers/Input/BottomSheetInput';
import CardTitle from '@/components/Wrappers/CardTitle';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import Divider from '@/shared/ui/divider/Divider';

import React from 'react';

const GeneralInfo = () => {
  const { data } = useUserQuery();
  return (
    <CardTitle title="Основная информация" borderRadius={16}>
      <BottomSheetInput name="name" title="Имя" value={data?.fname} />
      <Divider />
      <BottomSheetInput name="lastname" title="Фамилия" value={data?.lname} />
      <Divider />
      <BottomSheetInput title="Компания" value={data?.companyname} />
    </CardTitle>
  );
};

export default GeneralInfo;
