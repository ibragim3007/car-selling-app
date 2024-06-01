import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

interface DarkModalProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const DarkModal = ({ children, style, onPress }: DarkModalProps) => {
  return (
    <Pressable style={[{ backgroundColor: 'rgba(0,0,0,0.2)', flex: 1 }, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default DarkModal;
