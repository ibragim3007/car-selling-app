import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import { TypographyProps } from '@/shared/ui/styles/typography/typography';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React, { PropsWithChildren } from 'react';

interface RowInfoProps extends PropsWithChildren {
  title: string;
  value?: string | number;
  isEven: boolean;
  transparent?: boolean;
  valueProps?: TypographyProps;
}

const RowInfo = ({ title, value, isEven, transparent, valueProps, children }: RowInfoProps) => {
  const { colors } = useTheme();
  const rowColor = transparent ? 'transparent' : isEven ? colors.background.primary : colors.background.neutral;

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
        {children ? (
          children
        ) : (
          <Typography weight="medium" variant="caption-1" {...valueProps}>
            {value}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default RowInfo;
