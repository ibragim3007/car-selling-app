import CloseIcon from '@/icons/linear/close-square.svg';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';
import { Pressable } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface BottomSheetModalHeaderProps {
  title?: string | number;
  reset?: () => void;
  close?: () => void;
  dismissIcon?: React.FC<SvgProps>;
}

const QuitResetHeader = ({ title, reset, close, dismissIcon }: BottomSheetModalHeaderProps) => {
  const { dismiss } = useBottomSheetModal();
  const { colors } = useTheme();
  return (
    <Grid
      style={{ borderBottomWidth: 1, borderColor: colors.divider }}
      row
      justfity="center"
      paddingVertical={5}
      align="center"
    >
      <PressableIcon Icon={dismissIcon || CloseIcon} size={25} onPress={() => dismiss()} />
      <Grid align="center" justfity="center" flex={1}>
        <Typography variant="headline" weight="bold" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Typography>
      </Grid>
      {reset && (
        <Pressable onPress={reset}>
          <Grid paddingVertical={15} style={{ marginRight: 20 }} align="flex-end">
            <Typography variant="caption-1" color="success">
              Сбросить
            </Typography>
          </Grid>
        </Pressable>
      )}
      {!reset && (
        <PressableIcon
          style={{ backgroundColor: 'red', opacity: 0 }}
          Icon={CloseIcon}
          size={25}
          onPress={() => dismiss()}
        />
      )}
    </Grid>
  );
};

export default QuitResetHeader;
