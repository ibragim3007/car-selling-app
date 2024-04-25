import React from 'react';
import { Pressable } from 'react-native';

interface DarkModalProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const DarkModal = ({ children, onPress }: DarkModalProps) => {
  return (
    <Pressable style={{ backgroundColor: 'rgba(0,0,0,0.2)', flex: 1 }} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default DarkModal;
