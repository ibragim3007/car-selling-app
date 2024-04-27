import CardTitle from '@/components/Wrappers/CardTitle';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { IAdvice } from './AdvicePage';

interface AdviceCardProps extends IAdvice {}

const AdviceCard = ({ title, description }: AdviceCardProps) => {
  return (
    <CardTitle title={title} titleProps={{ weight: 'medium', variant: 'footnote' }}>
      <Typography variant="footnote">{description}</Typography>
    </CardTitle>
  );
};

export default AdviceCard;
