import Input from '@/components/Controllers/Input/Input';
import GoInButton from '@/components/Controllers/buttons/GoInButton';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import CardTitle from '@/components/Wrappers/CardTitle';
import Divider from '@/shared/ui/divider/Divider';
import { BottomSheetModal as BTMS, useBottomSheetModal } from '@gorhom/bottom-sheet';

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const GeneralInfo = () => {
  const buttomSheetRefName = useRef<BTMS>(null);
  const buttomSheetRefLastName = useRef<BTMS>(null);
  const { dismiss } = useBottomSheetModal();
  const { control, setFocus } = useForm();
  const handlePressName = () => {
    setFocus('name');
    buttomSheetRefName.current?.present();
  };
  const handlePressLastName = () => buttomSheetRefLastName.current?.present();

  return (
    <CardTitle title="Основная информация" borderRadius={16}>
      <GoInButton title="Имя" value={'Иван'} fn={handlePressName} />
      <BottomSheetModal title={'Имя'} ref={buttomSheetRefName}>
        <Input control={control} name="name" defaultValue="Иван" />
      </BottomSheetModal>
      <Divider />
      <GoInButton title="Фамилия" value={'Иванов'} fn={handlePressLastName} />
      <BottomSheetModal title={'Фамилия'} ref={buttomSheetRefLastName}>
        <Input control={control} name="lastname" defaultValue="Иванов" />
      </BottomSheetModal>
      <Divider />
      <GoInButton title="Компания" value={'Частное лицо'} />
    </CardTitle>
  );
};

export default GeneralInfo;
