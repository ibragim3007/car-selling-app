import React from 'react';
import { ViewProps } from 'react-native';
import Animated, { AnimateProps } from 'react-native-reanimated';
import { CustomAnimations } from './AnimationConstants';

interface LayoutAnimationProps extends AnimateProps<ViewProps> {}

const LayoutAnimation = ({ ...props }: LayoutAnimationProps) => {
  return <Animated.View layout={CustomAnimations.layoutDefault} {...props} />;
};

export default LayoutAnimation;
