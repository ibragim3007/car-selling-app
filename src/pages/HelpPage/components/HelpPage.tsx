import ContactInfo from '@/modules/ContactInfo';
import { routes } from '@/shared/config/routes';
import RowButton from '@/shared/ui/buttons/RowBotton';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import { router } from 'expo-router';
import React from 'react';

const HelpPage = () => {
  return (
    <PageBackground paddingHorizontal={8} paddingVertical={16} color="primary">
      <Grid space="md">
        <Grid>
          <RowButton title="Диалог с оператором" />
          <RowButton onPress={() => router.push(routes.pages.support.advice)} title="Советы" />
          <RowButton onPress={() => router.push(routes.pages.support.questions)} title="Часто задаваемые вопросы" />
          <RowButton title="Описание интерфейса" />
          <RowButton title="Скачать инструкцию" />
        </Grid>
        <ContactInfo />
      </Grid>
    </PageBackground>
  );
};

export default HelpPage;
