import ELD from '@/components/Handlers/ELD/ELD';
import { useFilterQuery } from '@/shared/api/entityies/filters/filter.api';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import EditFilterPageInner from './EditFilterPageInner';

const EditFilterPage = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const { data: filter, isLoading, isError, error } = useFilterQuery(params.id || '');

  return (
    <ScrollViewPage spaceVertical="sm">
      <ELD data={filter} isLoading={isLoading} isError={isError} error={error}>
        <EditFilterPageInner filter={filter!} />
      </ELD>
    </ScrollViewPage>
  );
};

export default EditFilterPage;
