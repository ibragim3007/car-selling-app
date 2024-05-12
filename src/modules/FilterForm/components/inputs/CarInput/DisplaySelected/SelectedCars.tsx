import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';
import { useDictionaryQuery, useMarkaModelQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const SelectedCars = () => {
  const formApi = useFormContext<IFilterCreate>();
  const marks = useWatch({ control: formApi.control, name: 'marks' });
  const models = useWatch({ control: formApi.control, name: 'models' });

  const { data: dict } = useDictionaryQuery();
  const { data: markaModels } = useMarkaModelQuery();

  const removeMark = (mark: number) => {
    if (!markaModels) return;

    const modelsOfThisMark = markaModels.filter(markaModel => markaModel.markaid === mark).map(mb => mb.modelid);

    formApi.setValue(
      'models',
      models?.filter(m => !modelsOfThisMark.includes(m)),
    );

    formApi.setValue(
      'marks',
      marks?.filter(m => m !== mark),
    );
  };

  return (
    <Grid wrap row space="sm">
      {marks?.map(mark => {
        const modelsOfThisMark = markaModels?.filter(markaModel => markaModel.markaid === mark).map(mb => mb.modelid);
        const amountOf = models?.filter(m => modelsOfThisMark?.includes(m)).length;
        console.log(modelsOfThisMark);
        const isSame = modelsOfThisMark?.length === amountOf;

        return (
          <SurfaceItemClose
            badgeNumber={!isSame ? amountOf : undefined}
            key={mark}
            onRemove={value => removeMark(value)}
            title={compare(dict!.marks, mark)}
            value={mark}
          />
        );
      })}
    </Grid>
  );
};

export default SelectedCars;
