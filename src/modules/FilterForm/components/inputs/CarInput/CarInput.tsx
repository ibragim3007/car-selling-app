import SelectButtonWrap from '@/components/Controllers/Input/Select/SelectButtonWrap';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { carTypes } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import Typography from '@/shared/ui/typography/Typography';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useEffect, useRef } from 'react';
import { FormProvider, useController, useFormContext, useWatch } from 'react-hook-form';
import QuitResetHeader from '../../../../../components/Modal/components/QuitResetHeader';
import AddButton from '../../buttons/AddButton';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import AutoChoiceList from './AutoChoiceList';
import SelectedCars from './DisplaySelected/SelectedCars';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { useMarkaModelQuery } from '@/shared/api/entityies/dictionary/dictionary.api';

const CarInput = () => {
  const buttomSheetRef = useRef<BTMS>(null);
  const buttomSheetRefCarType = useRef<BTMS>(null);
  const formApi = useFormContext<IFilterCreate>();

  const { field } = useController({ control: formApi.control, name: 'carTypes' });

  const onPressAddAuto = () => {
    buttomSheetRef.current?.present();
  };

  const onPressChangeCarType = () => {
    buttomSheetRefCarType.current?.present();
  };

  const stringForLabel = field.value?.map(a => enumCompare(carTypes, a)).join(', ');
  const { data: markaModels } = useMarkaModelQuery();
  const marks = useWatch({ control: formApi.control, name: 'marks' });
  const models = useWatch({ control: formApi.control, name: 'models' });

  const removeMark = (markaId: number) => {
    if (!markaModels) return;

    const modelsOfThisMark = markaModels.filter(markaModel => markaModel.markaid === markaId).map(mb => mb.modelid);

    formApi.setValue(
      'models',
      models?.filter(m => !modelsOfThisMark.includes(m)),
      { shouldDirty: true },
    );

    formApi.setValue(
      'marks',
      marks?.filter(m => m !== markaId),
      { shouldDirty: true },
    );
  };

  useEffect(() => {
    const res = markaModels?.filter(a => models?.includes(a.modelid));

    if (!res) return;

    const answer = res?.reduce((acc: number[], obj) => {
      if (!acc.includes(obj.markaid)) acc.push(obj.markaid);

      return acc;
    }, []);

    if (answer) formApi.setValue('marks', answer);
  }, [markaModels, models]);

  return (
    <WrapperBlock>
      <WrapInputLabel title="Тип авто">
        <SelectButtonWrap
          value={stringForLabel || 'Неважно'}
          onPress={onPressChangeCarType}
          control={formApi.control}
          name=""
        />
        <ModalCheckboxList
          bottomSheetModal={{
            title: 'Тип автомобиля',
            children: null,
            snapPoints: ['60%'],
          }}
          formApi={formApi}
          ref={buttomSheetRefCarType}
          pageData={{
            showAllSelect: false,
            isShowSearch: false,
            search: { placeholder: 'Поиск...' },
            name: 'carTypes',
            items: carTypes || [],
          }}
        />
        <BottomSheetModal
          snapPoints={['90%']}
          handleComponent={() => <QuitResetHeader title="Марка" reset={() => console.log('first')} />}
          ref={buttomSheetRef}
          title="Т3ип автомобиля"
        >
          <FormProvider {...formApi}>
            <AutoChoiceList />
          </FormProvider>
        </BottomSheetModal>
      </WrapInputLabel>
      <Typography>Марка и модель</Typography>
      <SelectedCars onDelete={removeMark} models={models || []} marks={marks || []} />
      <AddButton onPress={onPressAddAuto}>Добавить авто</AddButton>
    </WrapperBlock>
  );
};

export default CarInput;
