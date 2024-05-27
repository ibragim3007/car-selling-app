import { IFilter } from '@/shared/types/filters.types';
import React from 'react';
import SectionWrapper from './SectionWrapper';
import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';
import { compare } from '@/shared/helpers/compare';
import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';

interface CarsDisplayProps {
  filter: IFilter;
}

const CarsDisplay = ({ filter }: CarsDisplayProps) => {
  const { data: dict } = useDictionaryQuery();

  if (!filter.models || !filter.marks) return null;

  return (
    <SectionWrapper title="География">
      {filter.regions?.map(region => (
        <SurfaceItemClose key={region} title={compare(dict?.marks || [], region)} value={1} />
      ))}
    </SectionWrapper>
  );
};

export default CarsDisplay;
