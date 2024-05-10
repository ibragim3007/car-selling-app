import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';
import CloseIcon from '@/icons/linear/close-square.svg';

interface BottomSheetModalHeaderProps {
  title: string;
  reset?: () => void;
  close?: () => void;
}

const QuitResetHeader = ({ title, reset, close }: BottomSheetModalHeaderProps) => {
  const { dismiss } = useBottomSheetModal();
  return (
    <Grid row justfity="space-between" paddingVertical={11} align="center">
      <Grid flex={1}>
        <PressableIcon Icon={CloseIcon} size={25} onPress={() => dismiss()} />
      </Grid>
      <Grid align="center" flex={1}>
        <Typography variant="headline" weight="bold" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Typography>
      </Grid>
      <Grid style={{ marginRight: 20 }} align="flex-end" flex={1}>
        <Typography variant="caption-1" color="success">
          Сбросить
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QuitResetHeader;
