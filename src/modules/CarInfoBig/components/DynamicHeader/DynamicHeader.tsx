import GroupInfo from '@/components/Informers/GroupInfo';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';

const Header_Max_Height = 100;
const Header_Min_Height = 70;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

interface DynamicHeaderProps {
  scrollOffsetY: Animated.Value;
}

const DynamicHeader = ({ scrollOffsetY }: DynamicHeaderProps) => {
  const { colors } = useTheme();

  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  // const animatedHeaderColor = scrollOffsetY.interpolate({
  //   inputRange: [0, Scroll_Distance],
  //   outputRange: ['#181D31', '#678983'],
  //   extrapolate: 'clamp',
  // });

  return (
    <Animated.View
      style={[
        {
          padding: normalizedSize(16),
          backgroundColor: colors.background.primary,
          height: animatedHeaderHeight,
        },
      ]}
    >
      <GroupInfo leftInfo={'TOYOTA Land Cruiser'} rightInfo={'2012'} weight="medium" />
    </Animated.View>
  );
};

export default DynamicHeader;
