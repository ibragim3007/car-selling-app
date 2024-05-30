import MoreIcon from '@/icons/linear/more.svg';
import DropButton, { DropButtonProps } from '@/shared/ui/buttons/DropButton';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import DarkModal from '@/shared/ui/layout/DarkModal';
import Grid from '@/shared/ui/layout/Grid';
import GroupDropButton from '@/shared/ui/layout/GroupDropButton';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { GestureResponderEvent, Modal, TouchableOpacity, ViewProps } from 'react-native';
import Popover from 'react-native-popover-view';

interface DropdownProps {
  items: DropButtonProps[];
  style?: ViewProps['style'];
  modal?: boolean;
  isLoading?: boolean;
}

export const Dropdown = ({ items, isLoading }: DropdownProps) => {
  const [isOpen, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!isOpen);
  };

  const pressOnItem = (e: GestureResponderEvent, item: DropButtonProps) => {
    closeModal();

    if (item.onPress) {
      item.onPress(e);
    }
  };

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const openModal = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    setModalPosition({ x: pageX, y: pageY }); // Подстраиваем позицию модального окна под кнопку
    setModalVisible(true);
  };

  const [showPopover, setShowPopover] = useState(false);

  if (isLoading) return <LoadingData />;
  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      backgroundStyle={{
        backgroundColor: 'transparent',
      }}
      popoverStyle={{
        borderRadius: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.35,
        shadowRadius: 64,
        shadowOffset: {
          height: 8,
          width: 0,
        },
      }}
      offset={normalizedSize(4)}
      arrowSize={{ height: 0, width: 0 }}
      from={
        <TouchableOpacity onPress={() => setShowPopover(true)}>
          <Grid pointerEvents="none">
            <PressableIcon isPressed={showPopover} Icon={MoreIcon} />
          </Grid>
        </TouchableOpacity>
      }
    >
      <GroupDropButton borderRadius={16}>
        {items.map((item, index) => (
          // <DropDownAnimation key={index} index={index}>
          <DropButton
            key={index}
            title={item.title}
            Icon={item.Icon}
            color={item.color}
            onPress={e => pressOnItem(e, item)}
          />
          // </DropDownAnimation>
        ))}
      </GroupDropButton>
    </Popover>
  );

  return (
    <PressableIcon
      onPress={openModal}
      isPressed={isOpen}
      Icon={MoreIcon}
      insideOptions={
        <Modal transparent={true} onRequestClose={closeModal} visible={isOpen}>
          <DarkModal onPress={closeModal}>
            {/* <Animated.View entering={FadeInUp.springify()}> */}
            <GroupDropButton
              borderRadius={16}
              style={{
                position: 'absolute',
                overflow: 'hidden',
                // backgroundColor: 'transparent',
                zIndex: 30,
                right: 20,
                top: modalPosition.y + 30,
              }}
            >
              {items.map((item, index) => (
                // <DropDownAnimation key={index} index={index}>
                <DropButton
                  key={index}
                  title={item.title}
                  Icon={item.Icon}
                  color={item.color}
                  onPress={e => pressOnItem(e, item)}
                />
                // </DropDownAnimation>
              ))}
            </GroupDropButton>
            {/* </Animated.View> */}
          </DarkModal>
        </Modal>
      }
    />
  );
};
