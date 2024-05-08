import Button from '@/shared/ui/buttons/Button';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

interface GoTopButtonProps {
  goTopButton: () => void;
}

const GoTopButton = ({ goTopButton }: GoTopButtonProps) => {
  return (
    <Animated.View style={styles.goTopButton} entering={FadeInDown} exiting={FadeOutDown}>
      <Button color="black" onPress={goTopButton}>
        <FontAwesome6 name="arrow-up" size={22} />
      </Button>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  goTopButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 30,
    elevation: 30,
  },
});
export default GoTopButton;
