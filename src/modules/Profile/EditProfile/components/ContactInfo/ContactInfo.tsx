import BottomSheetInput from '@/components/Controllers/Input/BottomSheetInput';
import CardTitle from '@/components/Wrappers/CardTitle';
import Divider from '@/shared/ui/divider/Divider';
import React from 'react';

const ContactInfo = () => {
  return (
    <CardTitle title="Контактная информация" borderRadius={16}>
      <BottomSheetInput name="tel" title="Номер телефона" value={'+7 (922) 222-22-22'} />
      <Divider />
      <BottomSheetInput name="email" title="Email" value={'name@example.ru'} />
    </CardTitle>
  );
};

export default ContactInfo;
