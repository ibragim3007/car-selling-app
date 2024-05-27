import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';
import { useDictionaryQuery, useMarkaModelQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

interface SelectedCarsProps {
  models: number[];
  marks: number[];
  onDelete?: (markaId: number) => void;
}

const SelectedCars = ({ models, marks, onDelete }: SelectedCarsProps) => {
  const { data: dict } = useDictionaryQuery();
  const { data: markaModels } = useMarkaModelQuery();

  return (
    <Grid wrap row space="sm">
      {marks?.map(mark => {
        if (!mark) return null;
        const modelsOfThisMark = markaModels?.filter(markaModel => markaModel.markaid === mark).map(mb => mb.modelid);
        const amountOf = models?.filter(m => modelsOfThisMark?.includes(m)).length;

        const isSame = modelsOfThisMark?.length === amountOf;

        return (
          <SurfaceItemClose
            badgeNumber={!isSame ? amountOf : undefined}
            key={mark}
            onRemove={onDelete}
            title={compare(dict?.marks || [], mark)}
            value={mark}
          />
        );
      })}
    </Grid>
  );
};

export default SelectedCars;
