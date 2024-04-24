import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Button from '@/shared/ui/buttons/Button';
import GradientCard from '@/shared/ui/card/GradientCard';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const UnActiveSubscription = () => {
  const { colors } = useTheme();
  return (
    <GradientCard>
      <Grid space="sm">
        <Typography color="white" weight="bold" variant="headline">
          У вас нет активной подписки
        </Typography>
        <Typography variant="footnote" color="white">
          Без подписки объявления обновляются спустя 2 часа после размещения
        </Typography>
        <Button color="black" variant="ghost" style={{ backgroundColor: colors.background.primary }}>
          Подключить
        </Button>
      </Grid>
    </GradientCard>
  );
};

export default UnActiveSubscription;
