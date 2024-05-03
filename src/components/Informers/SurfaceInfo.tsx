import Surface, { SurfaceProps } from '@/shared/ui/surface/Surface';
import React from 'react';

interface SurfaceInfoProps extends SurfaceProps {}

const SurfaceInfo = ({ ...props }: SurfaceInfoProps) => {
  return (
    <Surface
      justfity="center"
      align="center"
      paddingHorizontal={8}
      paddingVertical={4}
      color="secondary"
      row
      gap={8}
      style={{ borderRadius: 4 }}
      {...props}
    />
  );
};

export default SurfaceInfo;
