import Card, { CardProps } from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface CardTitleProps extends CardProps {
  title: string;
  isNoPadding?: boolean;
  rightHeader?: React.ReactNode;
}

const CardTitle = ({ title, isNoPadding, rightHeader, ...props }: CardTitleProps) => {
  return (
    <Card {...props} p={isNoPadding ? 0 : 16}>
      <Grid gap={isNoPadding ? 0 : 12}>
        <Grid row justfity="space-between">
          <Typography
            variant="headline"
            weight="bold"
            style={{ paddingHorizontal: isNoPadding ? 16 : 0, paddingVertical: isNoPadding ? 12 : 0 }}
          >
            {title}
          </Typography>
          {rightHeader}
        </Grid>
        {props.children}
      </Grid>
    </Card>
  );
};

export default CardTitle;
