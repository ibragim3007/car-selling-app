import React, { PropsWithChildren } from 'react';
import Gradient, { GradientProps } from '../gradient/Gradient';
import { normalizedSize } from '@/shared/utils/size';

interface GradientCardProps extends PropsWithChildren {
  gradientProps?: Partial<GradientProps>;
  children: React.ReactNode;
}

const GradientCard = ({ gradientProps, children }: GradientCardProps) => {
  return (
    <Gradient {...gradientProps} style={{ padding: normalizedSize(16), borderRadius: 16 }}>
      {children}
    </Gradient>
  );
};

export default GradientCard;
