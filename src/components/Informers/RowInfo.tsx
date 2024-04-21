import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';

interface RowInfoProps {
  title: string;
  value: string | number;
  isEven: boolean;
}

const RowInfo = ({ title, value, isEven }: RowInfoProps) => {
  const { colors } = useTheme();
  const rowColor = isEven ? colors.background.primary : colors.background.neutral;

  return (
    <Grid
      align="center"
      row
      color={rowColor}
      style={{ paddingHorizontal: normalizedSize(16), paddingVertical: normalizedSize(8) }}
    >
      <Grid flex={1}>
        <Typography variant="caption-1" color="secondary">
          {title}
        </Typography>
      </Grid>
      <Grid flex={1}>
        <Typography variant="caption-1">{value}</Typography>
      </Grid>
    </Grid>
  );
};

export default RowInfo;
