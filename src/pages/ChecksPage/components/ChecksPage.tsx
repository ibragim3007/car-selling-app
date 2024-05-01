import CheckAutoInput from '@/modules/CheckAutoInput';
import Button from '@/shared/ui/buttons/Button';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import { router } from 'expo-router';
import React from 'react';

const ChecksPage = () => {
  return (
    <ScrollViewPage spaceVertical="sm">
      <CheckAutoInput />
      <Button onPress={() => router.push('_sitemap')}>Карта приложения</Button>
    </ScrollViewPage>
  );
};

export default ChecksPage;
