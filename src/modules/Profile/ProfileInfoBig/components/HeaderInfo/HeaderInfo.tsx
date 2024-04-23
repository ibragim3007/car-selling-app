import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { View } from 'react-native';

const HeaderInfo = () => {
  const { colors } = useTheme();
  return (
    <Card style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
      <Grid gap={16} row align="center">
        <Grid>
          <View style={{ width: 64, height: 64, backgroundColor: colors.background.success, borderRadius: 60 }} />
        </Grid>
        <Grid gap={8}>
          <Typography weight="bold" variant="title-2">
            Иван Иванов
          </Typography>
          <Typography color="secondary" variant="subhead">
            +7 (922) 222-22-22
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HeaderInfo;
