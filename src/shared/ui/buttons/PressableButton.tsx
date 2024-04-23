import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface PressableIconProps extends PressableProps {
  Icon: React.FC<SvgProps>;
}

const PressableIcon = ({ Icon, ...props }: PressableIconProps) => {
  return (
    <Pressable style={{ backgroundColor: 'red', padding: normalizedSize(10) }} {...props}>
      <Icon />
    </Pressable>
  );
};

export default PressableIcon;
