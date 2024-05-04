import { useAppDispatch, useAppSelector } from '@/shared/hooks/storeHooks';
import { closeModal } from '@/shared/store/modalReducer/actions/closeModal';
import Card from '@/shared/ui/card/Card';
import DarkModal from '@/shared/ui/layout/DarkModal';
import Grid from '@/shared/ui/layout/Grid';
import GroupDropButton from '@/shared/ui/layout/GroupDropButton';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Modal, Pressable } from 'react-native';

const ModalAction = () => {
  const { displayData, isOpen } = useAppSelector(state => state.modalReducer);
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal visible={isOpen} onRequestClose={onClose} transparent={true}>
      <DarkModal onPress={onClose}>
        <Grid align="center" justfity="center" flex={1}>
          <Pressable>
            {/* <Animated.View entering={ZoomIn.springify().stiffness(30).mass(0.1)}> */}
            <GroupDropButton borderRadius={16} style={{ width: 270, overflow: 'hidden' }}>
              <Card borderRadius={0}>
                <Grid align="center" justfity="center" space="md">
                  {displayData?.title && (
                    <Typography textAlign="center" weight="bold">
                      {displayData?.title}
                    </Typography>
                  )}
                  {displayData?.subhead && (
                    <Typography textAlign="center" variant="footnote">
                      {displayData?.subhead}
                    </Typography>
                  )}
                </Grid>
                {displayData?.children && displayData?.children}
              </Card>

              <Grid gap={1} row>
                {displayData?.buttons?.map((button, index) => {
                  return (
                    <Grid key={index} flex={1}>
                      {button}
                    </Grid>
                  );
                })}
              </Grid>
            </GroupDropButton>
            {/* </Animated.View> */}
          </Pressable>
        </Grid>
      </DarkModal>
    </Modal>
  );
};

export default ModalAction;
