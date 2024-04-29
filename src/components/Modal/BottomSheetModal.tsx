import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { PropsWithChildren, forwardRef, useMemo } from 'react';
import BottomSheetModalHeader from './BottomSheetModalHeader/BottomSheetModalHeader';
import Grid from '@/shared/ui/layout/Grid';
import DarkModal from '@/shared/ui/layout/DarkModal';
export type Ref = BottomSheetModal;

interface CustomBottomSheetModalProps extends PropsWithChildren {
  title: string;
}

const CustomBottomSheetModal = forwardRef<Ref, CustomBottomSheetModalProps>((props, ref) => {
  const snapPoints = useMemo(() => ['60%', '75%'], []);
  const { colors } = useTheme();
  return (
    <BottomSheetModal
      enableDismissOnClose={false}
      handleComponent={() => <BottomSheetModalHeader title={props.title} />}
      style={{ borderRadius: 16, paddingHorizontal: normalizedSize(16) }}
      ref={ref}
      backgroundStyle={{ backgroundColor: colors.background.secondary }}
      index={0}
      snapPoints={snapPoints}
    >
      <Grid paddingVertical={normalizedSize(16)}>{props.children}</Grid>
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;
