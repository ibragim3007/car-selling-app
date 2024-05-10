import { useRegion } from '@/shared/api/entityies/filters/useRegions';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

import { compare } from '@/shared/helpers/compare';
import { useFormContext, useWatch } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';
import SurfaceItemClose from '@/components/Informers/tables/SurfaceItemClose';

const RegionsDisplay = () => {
  const { selectedRegions, dict } = useRegion();

  const { setValue, control } = useFormContext<IFilterCreate>();

  const selectedValues = useWatch({
    control,
    name: 'regions',
  });

  const onChangeCheckBox = (value: number) => {
    const newValue = [...selectedValues!];

    setValue(
      'regions',
      newValue?.filter(v => v !== value),
    );
  };

  return (
    <Grid row space="sm" wrap>
      {selectedRegions?.map(selectedRegion => (
        <SurfaceItemClose
          key={selectedRegion}
          onRemove={onChangeCheckBox}
          title={compare(dict!.regions, selectedRegion)}
          value={selectedRegion}
        />
      ))}
    </Grid>
  );
};

export default RegionsDisplay;
