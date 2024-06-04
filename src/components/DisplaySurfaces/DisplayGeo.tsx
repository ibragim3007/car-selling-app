import { compare } from '@/shared/helpers/compare';
import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import SurfaceItemClose from '../Informers/tables/SurfaceItemClose';

interface DisplayGeoProps {
  onDeleteButton?: (value: number) => void;
  values: number[];
  dict: BaseTypeDictionary[];
}

const numberOfItemsToShow = 5;

const DisplayGeo = ({ onDeleteButton, values, dict }: DisplayGeoProps) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const leftRegions = values.length - numberOfItemsToShow;

  const toggleShowAll = () => {
    setIsShowAll(!isShowAll);
  };

  const regionsToShow = isShowAll ? values : values.slice(0, numberOfItemsToShow);

  return (
    <Grid row space="sm" wrap>
      {(regionsToShow || []).map(selectedRegion => (
        <SurfaceItemClose
          key={selectedRegion}
          onRemove={onDeleteButton}
          title={compare(dict, selectedRegion)}
          value={selectedRegion}
        />
      ))}
      {leftRegions > 0 && (
        <Button onPress={toggleShowAll} variant="text" size="small">
          {isShowAll ? 'Скрыть' : `Ещё ${leftRegions}`}
        </Button>
      )}
    </Grid>
  );
};

export default DisplayGeo;
