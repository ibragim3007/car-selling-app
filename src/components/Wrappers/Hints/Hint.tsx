import DarkModal from '@/shared/ui/layout/DarkModal';
import React from 'react';
import { Modal, Pressable, View } from 'react-native';

interface HintProps {
  children: React.ReactNode;
  isShow?: boolean;
  onClose?: () => void;
}

const Hint: React.FC<HintProps> = ({ children, isShow, onClose }) => {
  return (
    <>
      {isShow ? (
        <View style={{ flex: 1 }}>
          <Modal animationType="fade" visible={isShow} transparent={true}>
            <DarkModal style={{ flexGrow: 1, marginTop: 98 }} onPress={onClose}>
              <Pressable>{children}</Pressable>
            </DarkModal>
          </Modal>
        </View>
      ) : (
        <View style={{ flex: 1 }}>{children}</View>
      )}
    </>
  );
};

export default Hint;
