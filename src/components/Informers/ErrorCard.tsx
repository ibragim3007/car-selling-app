import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React, { PropsWithChildren } from 'react';

interface ErrorCardProps extends PropsWithChildren {
  text: string;
}

const ErrorCard = ({ text, children }: ErrorCardProps) => {
  const { colors } = useTheme();
  return (
    <Grid style={{ backgroundColor: colors.background.negative, padding: normalizedSize(12), borderRadius: 12 }}>
      <Typography variant="footnote" color="red">
        {children || text}
      </Typography>
    </Grid>
  );
};

export default ErrorCard;
