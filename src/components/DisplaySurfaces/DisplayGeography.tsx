import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import SurfaceItemClose from '../Informers/tables/SurfaceItemClose';

interface DisplayGeographyProps {
  onDeleteButton?: (value: number) => void;
  regions: number[];
}

const numberOfItemsToShow = 5;

const DisplayGeography = ({ onDeleteButton, regions }: DisplayGeographyProps) => {
  const { data: dict } = useDictionaryQuery();

  const [isShowAll, setIsShowAll] = useState(false);
  const leftRegions = regions.length - numberOfItemsToShow;

  const toggleShowAll = () => {
    setIsShowAll(!isShowAll);
  };

  const regionsToShow = isShowAll ? regions : regions.slice(0, numberOfItemsToShow);

  return (
    <Grid row space="sm" wrap>
      {(regionsToShow || []).map(selectedRegion => (
        <SurfaceItemClose
          key={selectedRegion}
          onRemove={onDeleteButton}
          title={compare(dict!.regions, selectedRegion)}
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

export default DisplayGeography;
