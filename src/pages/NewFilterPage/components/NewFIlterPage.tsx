import FilterForm from '@/modules/FilterForm';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';

const NewFIlterPage = () => {
  return (
    <ScrollViewPage spaceVertical="sm">
      <FilterForm />
    </ScrollViewPage>
  );
};

export default NewFIlterPage;
