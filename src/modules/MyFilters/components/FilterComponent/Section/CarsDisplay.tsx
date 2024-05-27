import SelectedCars from '@/modules/FilterForm/components/inputs/CarInput/DisplaySelected/SelectedCars';
import { IFilter } from '@/shared/types/filters.types';
import React from 'react';
import SectionWrapper from './SectionWrapper';

interface CarsDisplayProps {
  filter: IFilter;
}

const CarsDisplay = ({ filter }: CarsDisplayProps) => {
  if (!filter.models || !filter.marks) return null;

  return (
    <SectionWrapper title="Марка">
      <SelectedCars models={filter.models} marks={filter.marks} />
    </SectionWrapper>
  );
};

export default CarsDisplay;
