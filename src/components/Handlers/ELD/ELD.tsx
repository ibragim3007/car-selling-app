import ErrorCard from '@/components/Informers/ErrorCard';
import LoadingData from '@/shared/ui/loading/LoadingData';
import React, { PropsWithChildren } from 'react';

interface ELDProps extends PropsWithChildren {
  isLoading?: boolean;
  data?: any;
  error?: any;
  isError?: boolean;
}

const ELD = ({ isLoading, data, error, isError, children }: ELDProps) => {
  if (isLoading) {
    return <LoadingData />;
  }

  if (isError) {
    return <ErrorCard />;
  }

  if (!data) {
    return <ErrorCard text="Нет данных" />;
  }

  return children;
};

export default ELD;
