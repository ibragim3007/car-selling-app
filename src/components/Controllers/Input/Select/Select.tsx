import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import { IEnum } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import { BottomSheetModal as BSM, useBottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useFormContext, useWatch } from 'react-hook-form';
import { InputProps } from '../Input';
import SelectButtonWrap from './SelectButtonWrap';
import SelectList from './SelectList';

interface SelectProps extends InputProps {
  title: string;
  name: keyof IFilterCreate;
  data: IEnum[];
}

const Select = ({ title, data, name, ...props }: SelectProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const formApi = useFormContext();
  const onPresent = () => {
    buttomSheetRef.current?.present();
  };

  const { control, setValue } = useFormContext<IFilterCreate>();
  const value = useWatch({ control, name }) as number;
  const { dismiss } = useBottomSheetModal();
  const onChange = (item: IEnum) => {
    setValue(name, item.id as number);
    dismiss();
  };

  return (
    <>
      <SelectButtonWrap name={''} onPress={onPresent} {...props} />

      <BottomSheetModal handleComponent={() => <QuitResetHeader title={title} />} ref={buttomSheetRef}>
        <FormProvider {...formApi}>
          <SelectList currentValue={value} onChange={onChange} data={data} />
        </FormProvider>
      </BottomSheetModal>
    </>
  );
};

export default Select;
