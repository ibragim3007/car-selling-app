import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';
import { useDictionaryQuery, useMarkaModelQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';

interface SelectedCarsProps {
  models: number[];
  marks: number[];
  onDelete?: (markaId: number) => void;
}

const numberOfItemsToShow = 5;

const SelectedCars = ({ models, marks, onDelete }: SelectedCarsProps) => {
  const { data: dict } = useDictionaryQuery();
  const { data: markaModels } = useMarkaModelQuery();

  const leftCars = marks.length - numberOfItemsToShow;

  const [isShowAll, setIsShowAll] = useState(false);

  const toggleShowAll = () => {
    setIsShowAll(!isShowAll);
  };

  const marksToShow = isShowAll ? marks : marks.slice(0, numberOfItemsToShow);

  return (
    <Grid wrap row space="sm">
      {marksToShow?.map(mark => {
        if (!mark) return null;
        const modelsOfThisMark = markaModels?.filter(markaModel => markaModel.markaid === mark).map(mb => mb.modelid);
        const amountOf = models?.filter(m => modelsOfThisMark?.includes(m)).length;

        const isSame = modelsOfThisMark?.length === amountOf || amountOf === 0;

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

      {leftCars > 0 && (
        <Button onPress={toggleShowAll} size="small" variant="text">
          {isShowAll ? 'Скрыть' : `Ещё ${leftCars}`}
        </Button>
      )}
    </Grid>
  );
};

export default SelectedCars;
