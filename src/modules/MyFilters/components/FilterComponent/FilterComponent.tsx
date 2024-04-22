import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import More from '@/icons/linear/more.svg';
import Divider from '@/shared/ui/divider/Divider';
import React from 'react';

const FilterComponent = () => {
  return (
    <CardTitle title="Подборка 1" rightHeader={<More />}>
      <Divider />
      <TitleSwitch />
    </CardTitle>
  );
};

export default FilterComponent;
