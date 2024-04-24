import MoreIcon from '@/icons/linear/more.svg';
import DropButton, { DropButtonProps } from '@/shared/ui/buttons/DropButton';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import DarkModal from '@/shared/ui/layout/DarkModal';
import GroupDropButton from '@/shared/ui/layout/GroupDropButton';
import React, { useState } from 'react';
import { GestureResponderEvent, Modal, ViewProps } from 'react-native';

interface DropdownProps {
  items: DropButtonProps[];
  style?: ViewProps['style'];
  modal?: boolean;
}

export const Dropdown = ({ items, ...props }: DropdownProps) => {
  const [isOpen, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!isOpen);
  };
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const openModal = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    setModalPosition({ x: pageX, y: pageY }); // Подстраиваем позицию модального окна под кнопку
    setModalVisible(true);
  };

  return (
    <PressableIcon
      onPress={openModal}
      isPressed={isOpen}
      Icon={MoreIcon}
      insideOptions={
        <Modal transparent={true} onRequestClose={closeModal} visible={isOpen}>
          <DarkModal onPress={closeModal}>
            <GroupDropButton
              borderRadius={16}
              style={{
                position: 'absolute',
                overflow: 'hidden',
                zIndex: 30,
                right: 20,
                top: modalPosition.y + 30,
              }}
            >
              {items.map((item, index) => (
                <DropButton key={index} title={item.title} Icon={item.Icon} color={item.color} />
              ))}
            </GroupDropButton>
          </DarkModal>
        </Modal>
      }
    />
  );
};
