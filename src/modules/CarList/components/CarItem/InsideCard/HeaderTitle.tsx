import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { View } from 'react-native';

interface HeaderTitleProps {
  title: string;
  id: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, id }) => {
  const { colors } = useTheme();
  return (
    <Grid row align="center" gap={5}>
      <View style={{ width: 13, height: 13, backgroundColor: colors.accent.primary, borderRadius: 50, padding: 10 }} />
      <Typography variant="headline" weight="bold">
        {title} {id}
      </Typography>
    </Grid>
  );
};

export default HeaderTitle;
