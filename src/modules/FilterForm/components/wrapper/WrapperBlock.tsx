import CardTitle, { CardTitleProps } from '@/components/Wrappers/CardTitle';
import React from 'react';

interface WrapperBlockProps extends CardTitleProps {}

const WrapperBlock = ({ ...props }: WrapperBlockProps) => {
  return <CardTitle {...props} title={props.title} titleProps={{ weight: 'medium' }} />;
};

export default WrapperBlock;
