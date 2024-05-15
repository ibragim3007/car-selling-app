import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import ArrowDown from '@/icons/linear/arrow-down.svg';
import { IEnum } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import { Pressable } from 'react-native';
import Input, { InputProps } from '../Input';
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
      <Pressable onPress={onPresent}>
        <Grid pointerEvents="none">
          <Input
            {...props}
            readOnly
            endIcon={
              <PressableIcon
                Icon={() =>
                  ArrowDown({
                    style: { transform: [{ rotate: '180deg' }] },
                  })
                }
              />
            }
          />
        </Grid>
      </Pressable>

      <BottomSheetModal handleComponent={() => <QuitResetHeader title={title} />} ref={buttomSheetRef}>
        <FormProvider {...formApi}>
          <SelectList data={data} name={props.name} />
        </FormProvider>
      </BottomSheetModal>
    </>
  );
};

export default Select;
