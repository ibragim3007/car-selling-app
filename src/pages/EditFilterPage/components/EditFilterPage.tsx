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
    <ELD data={filter} isLoading={isLoading} isError={isError} error={error}>
      <ScrollViewPage spaceVertical="sm">
        <EditFilterPageInner filter={filter!} />
      </ScrollViewPage>
    </ELD>
  );
};

export default EditFilterPage;
