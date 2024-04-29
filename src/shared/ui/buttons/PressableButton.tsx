import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface PressableIconProps extends PressableProps {
  Icon: React.FC<SvgProps>;
  isPressed?: boolean;
  insideOptions?: React.ReactNode;
  size?: number;
}

const PressableIcon = ({ Icon, isPressed, insideOptions, size, ...props }: PressableIconProps) => {
  const { colors } = useTheme();
  const styles = StyleSheet.flatten([
    {
      backgroundColor: isPressed ? colors.background.neutral : 'transparent',
      padding: normalizedSize(10),
      borderRadius: 8,
    },
    props.style,
  ]);
  return (
    <Pressable {...props} style={styles}>
      {size ? <Icon width={normalizedSize(size)} height={normalizedSize(size)} /> : <Icon />}
      {insideOptions}
    </Pressable>
  );
};

export default PressableIcon;
