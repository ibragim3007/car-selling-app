import ELD from '@/components/Handlers/ELD/ELD';
import { useFilterQuery } from '@/shared/api/entityies/filters/filter.api';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import EditFilterPageInner from './EditFilterPageInner';
import PageBackground from '@/shared/ui/layout/PageBackground';

const EditFilterPage = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const { data: filter, isLoading, isError, error } = useFilterQuery(params.id || '');

  return (
    <PageBackground>
      <ELD data={filter} isLoading={isLoading} isError={isError} error={error}>
        <EditFilterPageInner filter={filter!} />
      </ELD>
    </PageBackground>
  );
};

export default EditFilterPage;
