import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import Button from '@/shared/ui/buttons/Button';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import GoInButton from '../../buttons/GoInButton';

interface GISLIstProps {
  name: keyof IFilterCreate;
  title: string;
  items: BaseTypeDictionary[];
}

const GISLIst = ({ name, title, items }: GISLIstProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const formApi = useFormContext<IFilterCreate>();
  const {
    field: { value },
  } = useController({ control: formApi.control, name });

  const typedValue = value as number[];

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
      <GoInButton
        title={title}
        value={displayString}
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
      <ModalCheckboxList
        bottomSheetModal={{
          title,
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

export default GISLIst;
