import SelectButtonWrap from '@/components/Controllers/Input/Select/SelectButtonWrap';
import SelectList from '@/components/Controllers/Input/Select/SelectList';
import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import { IEnum, owners, states } from '@/shared/constants/enums/Car';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { IFilterCreate } from '@/shared/types/filters.types';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import { createAscendingArray } from '@/shared/helpers/createAscendingArray';
import Typography from '@/shared/ui/typography/Typography';

const StateInput = () => {
  const formApi = useFormContext<IFilterCreate>();
  const buttomSheetRef = useRef<BTMS>(null);
  const ownersCount = useWatch({ control: formApi.control, name: 'ownersCount' });

  const pressOpen = () => {
    buttomSheetRef.current?.present();
  };

  const onChangeOwnersCount = (item: IEnum) => {
    const newValue = createAscendingArray(item.id || 0);
    formApi.setValue('ownersCount', newValue);
    buttomSheetRef.current?.dismiss();
  };

  const lastOwnerCountNumber = (ownersCount || [])[(ownersCount || [])?.length - 1];
  const ownerTypeValueString = enumCompare(owners, lastOwnerCountNumber) || 'Неважно';
  return (
    <Card borderRadius={16}>
      <Grid space="lg">
        <WrapInputLabel title="Повреждения">
          <ToggleButton
            items={states}
            Item={(item, index) => (
              <ToggleButtonItem
                onPress={item => console.log(item)}
                key={item.id}
                currentValue={null}
                title={item.text}
                value={item.id}
                length={states.length}
                index={index}
                item={item}
              />
            )}
          />
        </WrapInputLabel>

        <WrapInputLabel title="Владельцы по ПТС">
          {/* <Select
            title="Владельцы по ПТС"
            name="owners"
            value={enumCompare(owners, )}
            control={formApi.control}
            data={owners}
          /> */}
          <Typography>{JSON.stringify(ownersCount)}</Typography>
          <SelectButtonWrap value={ownerTypeValueString} onPress={pressOpen} control={formApi.control} name="" />
          <BottomSheetModal handleComponent={() => <QuitResetHeader title={'Владельцы по ПТС'} />} ref={buttomSheetRef}>
            <SelectList currentValue={lastOwnerCountNumber} onChange={onChangeOwnersCount} data={owners} />
          </BottomSheetModal>
        </WrapInputLabel>
      </Grid>
    </Card>
  );
};

export default StateInput;
