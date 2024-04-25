import React, { useRef } from 'react';
import { Animated } from 'react-native';

interface TouchAnimationProps {
  children: React.ReactNode;
  value?: number;
}

const TouchAnimation: React.FC<TouchAnimationProps> = ({ children, value = 0.99 }) => {
  const animationControlScaleShowProgress = useRef(new Animated.Value(1)).current;

  const onTouchStart = () => {
    Animated.spring(animationControlScaleShowProgress, {
      // duration: ANIMATION_SPEED,
      toValue: value,
      useNativeDriver: true,
    }).start();
  };
  const onTouchCancel = () => {
    Animated.spring(animationControlScaleShowProgress, {
      // duration: ANIMATION_SPEED,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchCancel}
      style={{
        transform: [{ scale: animationControlScaleShowProgress }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default TouchAnimation;
