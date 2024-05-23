import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import SelectButtonWrap from './SelectButtonWrap';

interface SCBListProps {
  name: keyof IFilterCreate;
  title: string;
  items: BaseTypeDictionary[];
}

const SCBList = ({ name, title, items }: SCBListProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const formApi = useFormContext<IFilterCreate>();
  const {
    field: { value },
  } = useController({ control: formApi.control, name });

  const typedValue = Array.isArray(value) ? (value as number[]) : [];

  const reset = () => {
    formApi.setValue(name, []);
  };

  const present = () => {
    buttomSheetRef.current?.present();
  };

  const isShowValues = typedValue && typedValue.length !== 0;

  const displayString = typedValue?.map(a => enumCompare(items, a)).join(', ');

  return (
    <>
      <SelectButtonWrap value={displayString} onPress={present} control={formApi.control} name={name} />
      <ModalCheckboxList
        bottomSheetModal={{
          title: title,
          children: null,
          snapPoints: ['60%'],
        }}
        formApi={formApi}
        ref={buttomSheetRef}
        pageData={{
          isShowSearch: false,
          search: { placeholder: 'Поиск...' },
          name,
          items,
        }}
      />
    </>
  );
};

export default SCBList;
