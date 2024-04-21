import Card, { CardProps } from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface CardTitleProps extends CardProps {
  title: string;
  isNoPadding?: boolean;
}

const CardTitle = ({ title, isNoPadding, ...props }: CardTitleProps) => {
  return (
    <Card {...props} p={isNoPadding ? 0 : 16}>
      <Grid gap={isNoPadding ? 0 : 12}>
        <Typography
          variant="headline"
          weight="bold"
          style={{ paddingHorizontal: isNoPadding ? 16 : 0, paddingVertical: isNoPadding ? 12 : 0 }}
        >
          {title}
        </Typography>
        {props.children}
      </Grid>
    </Card>
  );
};

export default CardTitle;
