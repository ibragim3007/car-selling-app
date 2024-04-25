import React, { PropsWithChildren } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface DropDownAnimationProps extends PropsWithChildren {
  index: number;
}

const DropDownAnimation = ({ children, index }: DropDownAnimationProps) => {
  return (
    <Animated.View
      key={index}
      entering={FadeInUp.delay(index * 100)
        .springify()
        .damping(100)}
    >
      {children}
    </Animated.View>
  );
};

export default DropDownAnimation;
