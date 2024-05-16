import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import { IEnum } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import { InputProps } from '../Input';
import SelectButtonWrap from './SelectButtonWrap';
import SelectList from './SelectList';

interface SelectProps extends InputProps {
  title: string;
  name: keyof IFilterCreate;
  data: IEnum[];
}

const Select = ({ title, data, ...props }: SelectProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const formApi = useFormContext();
  const onPresent = () => {
    buttomSheetRef.current?.present();
  };

  return (
    <>
      <SelectButtonWrap onPress={onPresent} {...props} />

      <BottomSheetModal handleComponent={() => <QuitResetHeader title={title} />} ref={buttomSheetRef}>
        <FormProvider {...formApi}>
          <SelectList data={data} name={props.name} />
        </FormProvider>
      </BottomSheetModal>
    </>
  );
};

export default Select;
