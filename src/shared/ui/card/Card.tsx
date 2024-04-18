import { useTheme } from '@/shared/hooks/stable/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

const Card = (props: ViewProps) => {
  const { colors } = useTheme();
  const stylesView: ViewProps['style'] = {
    backgroundColor: colors.background.primary,
    borderRadius: colors.styles.borderRadius,
  };

  const mergedStyles = StyleSheet.flatten([stylesView, props.style]);

  return <View {...props} style={mergedStyles} />;
};

export default Card;
