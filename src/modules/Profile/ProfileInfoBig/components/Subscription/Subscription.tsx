import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Card from '@/shared/ui/card/Card';
import CheckIcon from '@/shared/ui/icons/CheckIcon';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Pressable } from 'react-native';
const Subscription = () => {
  const { colors } = useTheme();
  const { data } = useUserQuery();

  return (
    <Pressable onPress={() => Alert.alert('Hello!')}>
      <Card borderRadius={16}>
        <Grid row justfity="space-between" align="center">
          <Grid row gap={10} align="center">
            <CheckIcon />
            <Typography variant="subhead" weight="bold">
              Подписка
            </Typography>
          </Grid>
          <Grid align="center" row gap={16}>
            <Typography color="secondary" variant="footnote">
              До 31.12.2023
            </Typography>
            <SimpleLineIcons name="arrow-right" size={normalizedSize(14)} color={colors.text.disabled} />
          </Grid>
        </Grid>
      </Card>
    </Pressable>
  );
};

export default Subscription;
