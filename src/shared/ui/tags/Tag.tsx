import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, Text, TextProps, View, ViewProps } from 'react-native';

export type TColorTag = 'green' | 'black' | 'red' | 'yellow' | 'purple';
export type TSizeTag = 'small' | 'medium';

export interface TagProps extends ViewProps {
  color?: TColorTag;
  size?: TSizeTag;
  icon?: React.ReactNode;
}

const Tag = ({ children, color = 'green', size = 'medium', icon, ...props }: TagProps) => {
  const { colors } = useTheme();
  const backgroundStyle: Record<TColorTag, ViewProps['style']> = {
    green: {
      backgroundColor: colors.accent.primary_pale_transparent,
    },
    black: {
      backgroundColor: colors.background.secondary,
    },
    red: {
      backgroundColor: colors.background.negative,
    },
    yellow: {
      backgroundColor: colors.background.alert,
    },
    purple: {
      backgroundColor: '#7f00fe36',
    },
  };

  const textStyle: Record<TColorTag, TextProps['style']> = {
    green: {
      color: colors.accent.primary,
    },
    black: {
      color: colors.text.primary,
    },
    red: {
      color: colors.accent.red,
    },
    yellow: {
      color: colors.accent.alert,
    },
    purple: {
      color: '#7F00FE',
    },
  };

  const stylesView: ViewProps['style'] = StyleSheet.flatten([
    backgroundStyle[color],
    {
      paddingHorizontal: normalizedSize(size === 'medium' ? 8 : 4),
      paddingVertical: normalizedSize(size === 'medium' ? 4 : 2),
      alignSelf: 'flex-start',
      borderRadius: normalizedSize(4),
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    props.style,
  ]);

  return (
    <View {...props} style={stylesView}>
      <Text style={[{ fontSize: normalizedSize(12) }, textStyle[color]]}>{children}</Text>
    </View>
  );
};

export default Tag;
