import Card, { CardProps } from '@/shared/ui/card/Card';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface CardTitleProps extends CardProps {
  title: string;
}

const CardTitle = ({ title, ...props }: CardTitleProps) => {
  return (
    <Card {...props}>
      <Typography variant="headline" weight="bold" style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
        {title}
      </Typography>
      {props.children}
    </Card>
  );
};

export default CardTitle;
