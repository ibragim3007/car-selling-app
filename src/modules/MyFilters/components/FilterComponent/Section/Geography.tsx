import React from 'react';
import SectionWrapper from './SectionWrapper';
import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';
import { IFilter } from '@/shared/types/filters.types';
import { compare } from '@/shared/helpers/compare';
import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';

interface GeographyProps {
  filter: IFilter;
}

const Geography = ({ filter }: GeographyProps) => {
  const { data: dict } = useDictionaryQuery();

  if (!filter.regions) return null;

  return (
    <SectionWrapper title="География">
      {filter.regions?.map(region => (
        <SurfaceItemClose key={region} title={compare(dict?.regions || [], region)} value={1} />
      ))}
    </SectionWrapper>
  );
};

export default Geography;
