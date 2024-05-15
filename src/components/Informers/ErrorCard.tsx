import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { IErrorResponseServer } from '@/shared/types/errors.types';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React, { PropsWithChildren } from 'react';

interface ErrorCardProps extends PropsWithChildren {
  text?: string;
  error?: IErrorResponseServer;
}

const ErrorCard = ({ text, error, children }: ErrorCardProps) => {
  const { colors } = useTheme();
  return (
    <Grid style={{ backgroundColor: colors.background.negative, padding: normalizedSize(12), borderRadius: 12 }}>
      <Typography variant="footnote" color="red">
        {error?.data?.errors?.map(error => error.title).join(', ') || children || text || 'Ошибка'}
      </Typography>
    </Grid>
  );
};

export default ErrorCard;
