import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { SvgProps } from 'react-native-svg';

interface CardInformerProps {
  title: string;
  value: string;
  Icon: React.FC<SvgProps>;
}

const CardInformer = ({ title, value, Icon }: CardInformerProps) => {
  const { colors } = useTheme();
  return (
    <Grid
      paddingVertical={8}
      paddingHorizontal={12}
      row
      align="center"
      gap={10}
      flex={1}
      style={{ borderRadius: colors.styles.borderRadius, backgroundColor: colors.background.neutral }}
    >
      <Icon height={normalizedSize(24)} width={normalizedSize(24)} />
      <Grid justfity="space-between" gap={8}>
        <Typography variant="caption-1" color="secondary">
          {title}
        </Typography>
        <Typography variant="footnote" weight="bold">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardInformer;
