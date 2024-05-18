import React, { useRef } from 'react';
import GoInButton from '../../buttons/GoInButton';
import { useController, useFormContext } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';
import Typography from '@/shared/ui/typography/Typography';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import Button from '@/shared/ui/buttons/Button';

interface GISLIstProps {}

const GISLIst = () => {
  const buttomSheetRef = useRef<BSM>(null);
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value: wheels },
  } = useController({ control, name: 'wheels' });

  const reset = () => {
    setValue('wheels', []);
  };

  const present = () => {
    buttomSheetRef.current?.present();
  };

  const isShowValues = wheels && wheels.length !== 0;

  return (
    <>
      <GoInButton
        title={'Руль'}
        value={wheels?.join(', ')}
        isDivider
        onPress={present}
        renderButton={() => {
          if (isShowValues)
            return (
              <Button onPress={reset} size="small" variant="text">
                Сбросить
              </Button>
            );
        }}
      />
      <BottomSheetModal handleComponent={() => null} ref={buttomSheetRef}>
        <Typography>12</Typography>
      </BottomSheetModal>
    </>
  );
};

export default GISLIst;
