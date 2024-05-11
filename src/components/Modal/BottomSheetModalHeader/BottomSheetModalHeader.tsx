import CloseIcon from '@/icons/linear/close-square.svg';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';

interface BottomSheetModalHeaderProps {
  title: string | number;
  active?: () => void;
  close?: () => void;
}

const BottomSheetModalHeader = ({ title, active, close }: BottomSheetModalHeaderProps) => {
  const { dismiss } = useBottomSheetModal();
  return (
    <Grid row justfity="space-between" paddingVertical={11} align="center">
      <Grid flex={1}>
        <PressableIcon Icon={CloseIcon} size={25} onPress={() => dismiss()} />
      </Grid>
      <Grid align="center" flex={1}>
        <Typography weight="bold" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Typography>
      </Grid>
      <Grid align="center" flex={1}>
        <Typography color="success" weight="bold">
          Сохранить
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BottomSheetModalHeader;
