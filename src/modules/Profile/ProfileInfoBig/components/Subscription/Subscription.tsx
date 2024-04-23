import ArrowRight from '@/icons/linear/arrow-right.svg';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Alert, Pressable } from 'react-native';

const Subscription = () => {
  return (
    <Pressable onPress={() => Alert.alert('Hello!')}>
      <Card borderRadius={16}>
        <Grid row justfity="space-between" align="center">
          <Grid>
            <Typography variant="subhead" weight="bold">
              Подписка
            </Typography>
          </Grid>
          <Grid align="center" row gap={16}>
            <Typography color="secondary" variant="footnote">
              До 31.12.2023
            </Typography>
            <ArrowRight />
          </Grid>
        </Grid>
      </Card>
    </Pressable>
  );
};

export default Subscription;
