import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { SvgProps } from 'react-native-svg';

interface IconWrapProps extends SvgProps {
  Icon: React.FC<SvgProps>;
  size?: number;
}

const IconWrap = ({ Icon, size = 16, ...props }: IconWrapProps) => {
  const sizeNorm = normalizedSize(size);

  return <Icon {...props} height={sizeNorm} width={sizeNorm} />;
};

export default IconWrap;
