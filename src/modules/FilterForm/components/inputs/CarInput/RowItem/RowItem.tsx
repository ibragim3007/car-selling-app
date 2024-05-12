import RowList, { RowListProps } from '@/components/Informers/tables/RowList';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ArrowLeft from '@/icons/linear/arrow-left.svg';
import ArrowRight from '@/icons/linear/arrow-right-green.svg';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useController, useFormContext } from 'react-hook-form';
import QuitResetHeader from '../../../HandleComponents/QuitResetHeader';
import ModelsList from './ModelsList';
import { useMarkaModelQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { CheckboxCustom } from '@/shared/ui/inputs/Checkbox';

interface RowItemProps<TItem> extends RowListProps<TItem> {}

const RowItem = <TItem,>({ ...props }: RowItemProps<TItem>) => {
  const buttomSheetRef = useRef<BTMS>(null);
  const formApi = useFormContext<IFilterCreate>();

  const { data: markaModel } = useMarkaModelQuery();
  const { field } = useController({ control: formApi.control, name: 'models' });

  const totalMarkaModel = markaModel?.filter(markaModel => markaModel.markaid === props.value);
  const totalMarkaModelAmount = totalMarkaModel?.length;

  const pickedAmount = totalMarkaModel?.filter(totalMarkaModel =>
    field.value?.includes(totalMarkaModel.modelid),
  ).length;

  const isChecked = pickedAmount !== undefined && pickedAmount > 0 ? true : false;
  const selectedType: CheckboxCustom['type'] = pickedAmount === totalMarkaModelAmount ? 'check' : 'partial';

  const open = () => buttomSheetRef.current?.present();

  return (
    <Grid>
      <RowList
        {...props}
        onChange={open}
        isSelectedForce={isChecked}
        type={selectedType}
        rightSide={<ArrowRight />}
        badgeNumber={pickedAmount}
      />

      <BottomSheetModal
        title={props.title}
        enablePanDownToClose={false}
        snapPoints={['90%']}
        ref={buttomSheetRef}
        handleComponent={() => (
          <QuitResetHeader
            title={String(props.title)}
            dismissIcon={() => ArrowLeft({ style: { width: 35, height: 35 } })}
          />
        )}
      >
        <FormProvider {...formApi}>
          <ModelsList markaId={props.value} />
        </FormProvider>
      </BottomSheetModal>
    </Grid>
  );
};

export default RowItem;
