import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface DividerProps extends ViewProps {
  vertical?: boolean;
  space?: number;
}

const Divider = ({ vertical, space = 8, ...props }: DividerProps) => {
  const { colors } = useTheme();

  const dividerProps: DividerProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: colors.divider,
      width: vertical ? 1 : '100%',
      height: vertical ? '100%' : 1,
      marginHorizontal: vertical ? normalizedSize(space) : 0,
      marginVertical: vertical ? 0 : normalizedSize(space),
    },
    props.style,
  ]);

  return <View {...props} style={dividerProps} />;
};

export default Divider;
