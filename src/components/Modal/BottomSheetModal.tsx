import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback, useMemo } from 'react';
import BottomSheetModalHeader from './BottomSheetModalHeader/BottomSheetModalHeader';

export type Ref = BottomSheetModal;

export interface CustomBottomSheetModalProps extends BottomSheetModalProps {
  title?: string | number;
  children: React.ReactNode;
}

const CustomBottomSheetModal = forwardRef<Ref, CustomBottomSheetModalProps>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);
  const { colors } = useTheme();
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    [],
  );
  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      enableDismissOnClose={true}
      handleComponent={() => <BottomSheetModalHeader title={props.title} />}
      // style={{ borderRadius: 16, paddingVertical: normalizedSize(12) }}
      ref={ref}
      backgroundStyle={{ backgroundColor: colors.background.primary }}
      index={0}
      snapPoints={snapPoints}
      {...props}
    >
      <Grid flex={1}>{props.children}</Grid>

      {/* <Grid paddingVertical={normalizedSize(16)}>{props.children}</Grid> */}
      {/* <BottomSheetView>{props.children}</BottomSheetView> */}
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;
