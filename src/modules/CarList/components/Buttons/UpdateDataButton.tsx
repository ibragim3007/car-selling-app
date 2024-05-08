import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Button, { ButtonProps } from '@/shared/ui/buttons/Button';
import { fontWeight } from '@/shared/ui/styles/typography/typography';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';

interface UpdateDataButtonProps extends ButtonProps {
  goUpdateButton?: () => void;
}

const UpdateDataButton = ({ goUpdateButton, ...props }: UpdateDataButtonProps) => {
  const { colors } = useTheme();
  return (
    <Animated.View style={styles.goTopButton} entering={SlideInUp} exiting={SlideOutUp}>
      <Button
        {...props}
        style={{ borderRadius: 30, backgroundColor: colors.accent.primary_dark }}
        textStyle={{ color: colors.text.white, fontFamily: fontWeight.medium }}
        color="green"
        variant="outline"
        onPress={goUpdateButton}
        size="small"
      >
        Обновить
      </Button>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  goTopButton: {
    position: 'absolute',
    top: 10,
    width: '50%',
    zIndex: 30,
    alignSelf: 'center',
  },
});

export default UpdateDataButton;
