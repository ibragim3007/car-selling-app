import { useTheme } from '@/shared/hooks/stable/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { View } from 'react-native';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  const { colors } = useTheme();
  return (
    <Grid row align="center" gap={5}>
      <View style={{ width: 13, height: 13, backgroundColor: colors.accent.primary, borderRadius: 50, padding: 10 }} />
      <Typography variant="headline" weight="bold">
        {title}
      </Typography>
    </Grid>
  );
};

export default HeaderTitle;
