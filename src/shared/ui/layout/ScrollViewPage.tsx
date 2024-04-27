import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, ViewProps } from 'react-native';
import { PageBackgroundProps } from './PageBackground';
import { normalizedSize } from '@/shared/utils/size';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { calculateSpacing } from '@/shared/helpers/styleHelp/calculateSpacing';

interface ScrollViewPageProps extends ScrollViewProps, PageBackgroundProps {}

const ScrollViewPage = ({
  style,
  paddingHorizontal,
  paddingVertical,
  color = 'secondary',
  isPaddingPage,
  space,
  spaceHorizontal,
  spaceVertical,
  ...props
}: ScrollViewPageProps) => {
  const { colors } = useTheme();
  const styles: ViewProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: colors.background[color],
      height: '100%',
    },
    isPaddingPage !== undefined && { padding: normalizedSize(16) },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    space !== undefined && { gap: normalizedSize(calculateSpacing(space)) },
    spaceHorizontal !== undefined && { paddingHorizontal: normalizedSize(calculateSpacing(spaceHorizontal)) },
    spaceVertical !== undefined && { paddingVertical: normalizedSize(calculateSpacing(spaceVertical)) },
    style,
  ]);

  return <ScrollView style={styles} {...props} />;
};

export default ScrollViewPage;
