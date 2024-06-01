import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';
import { IFilter } from '@/shared/types/filters.types';
import { compare } from '@/shared/helpers/compare';
import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import Button from '@/shared/ui/buttons/Button';

interface GeographyProps {
  filter: IFilter;
}

const numberOfItemsToShow = 5;

const Geography = ({ filter: { regions } }: GeographyProps) => {
  const { data: dict } = useDictionaryQuery();

  const [isShowAll, setIsShowAll] = useState(false);

  if (!regions) return null;

  const leftRegions = regions.length - numberOfItemsToShow;

  const toggleShowAll = () => {
    setIsShowAll(!isShowAll);
  };

  const regionsToShow = isShowAll ? regions : regions.slice(0, numberOfItemsToShow);

  return (
    <SectionWrapper title="География">
      {regionsToShow.map(region => (
        <SurfaceItemClose key={region} title={compare(dict?.regions || [], region)} value={1} />
      ))}

      {leftRegions > 0 && (
        <Button onPress={toggleShowAll} variant="text" size="small">
          {isShowAll ? 'Скрыть' : `Ещё ${leftRegions}`}
        </Button>
      )}
    </SectionWrapper>
  );
};

export default Geography;
