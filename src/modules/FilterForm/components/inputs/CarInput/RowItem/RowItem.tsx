import RowList, { RowListProps } from '@/components/Informers/tables/RowList';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ArrowRight from '@/icons/linear/arrow-right-green.svg';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import ModelsList from './ModelsList';

interface RowItemProps<TItem> extends RowListProps<TItem> {}

const RowItem = <TItem,>({ ...props }: RowItemProps<TItem>) => {
  const buttomSheetRef = useRef<BTMS>(null);
  const formApi = useFormContext();

  const open = () => {
    buttomSheetRef.current?.present();
  };

  return (
    <Grid>
      <RowList {...props} onChange={open} rightSide={<ArrowRight />} />

      <BottomSheetModal title={props.title} enablePanDownToClose={false} snapPoints={['90%']} ref={buttomSheetRef}>
        <FormProvider {...formApi}>
          <ModelsList markaId={props.value} />
        </FormProvider>
      </BottomSheetModal>
    </Grid>
  );
};

export default RowItem;
