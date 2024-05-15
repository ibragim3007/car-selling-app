import ELD from '@/components/Handlers/ELD/ELD';
import MainPage from '@/components/ModalCheckboxList/components/MainPage';
import { useModelsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { useModalcheckbox } from '@/shared/hooks/helpers/useModalcheckbox';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import QuitResetHeader from '../../../../../../components/Modal/components/QuitResetHeader';
import ArrowLeft from '@/icons/linear/arrow-left.svg';

interface ModelsListProps2 {
  markaId: number;
  title?: string | number;
}

const ModelsList2 = ({ markaId, title }: ModelsListProps2) => {
  const { data: models, isLoading, error, isError } = useModelsQuery(markaId);

  const checkModalboxUse = useModalcheckbox({
    name: 'models',
    items: models || [],
    search: { placeholder: 'Введите...' },
  });

  return (
    <Grid flex={1}>
      <QuitResetHeader
        reset={checkModalboxUse.reset}
        title={String(title)}
        dismissIcon={() => ArrowLeft({ style: { width: 35, height: 35 } })}
      />

      <ELD data={models} isError={isError} error={error} isLoading={isLoading}>
        <MainPage
          items={models || []}
          checkModalboxUse={checkModalboxUse}
          name={'models'}
          search={{ placeholder: 'Введите...' }}
        />
      </ELD>
    </Grid>
  );
};

export default ModelsList2;
