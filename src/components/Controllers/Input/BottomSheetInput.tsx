import React, { useRef, useState } from 'react';
import GoInButton from '../buttons/GoInButton';

import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import { useForm } from 'react-hook-form';
import Input from './Input';

interface BottomSheetInputProps {
  title: string;
  value: string | number;
  name?: string;
}

const BottomSheetInput = ({ title, value, name }: BottomSheetInputProps) => {
  const { control } = useForm();
  const buttomSheetRef = useRef<BTMS>(null);
  const [buttonFocus, setButtonFocus] = useState(false);
  const pressOnIcon = () => {
    if (name) {
      setButtonFocus(true);
      buttomSheetRef.current?.present();
    }
  };

  return (
    <GoInButton title={title} value={value} name={name} fn={pressOnIcon}>
      <BottomSheetModal title={title} ref={buttomSheetRef}>
        {name && <Input autoFocus={buttonFocus} control={control} name={name} defaultValue={String(value)} />}
      </BottomSheetModal>
    </GoInButton>
  );
};

export default BottomSheetInput;
