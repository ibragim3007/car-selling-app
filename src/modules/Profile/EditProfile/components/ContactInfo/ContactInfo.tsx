import BottomSheetInput from '@/components/Controllers/Input/BottomSheetInput';
import CardTitle from '@/components/Wrappers/CardTitle';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { formatPhoneNumber } from '@/shared/helpers/formatPhoneNumber';
import Divider from '@/shared/ui/divider/Divider';
import React from 'react';

const ContactInfo = () => {
  const { data } = useUserQuery();
  return (
    <CardTitle title="Контактная информация" borderRadius={16}>
      <BottomSheetInput name="tel" title="Номер телефона" value={formatPhoneNumber(data?.phone || '') || ''} />
      <Divider />
      <BottomSheetInput name="email" title="Email" value={'name@example.ru'} />
    </CardTitle>
  );
};

export default ContactInfo;
