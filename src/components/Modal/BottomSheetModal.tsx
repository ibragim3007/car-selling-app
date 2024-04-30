import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { PropsWithChildren, forwardRef, useCallback, useMemo } from 'react';
import BottomSheetModalHeader from './BottomSheetModalHeader/BottomSheetModalHeader';
export type Ref = BottomSheetModal;

interface CustomBottomSheetModalProps extends PropsWithChildren {
  title: string;
}

const CustomBottomSheetModal = forwardRef<Ref, CustomBottomSheetModalProps>((props, ref) => {
  const snapPoints = useMemo(() => ['60%', '75%'], []);
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
      style={{ borderRadius: 16, paddingHorizontal: normalizedSize(16) }}
      ref={ref}
      backgroundStyle={{ backgroundColor: colors.background.primary }}
      index={0}
      snapPoints={snapPoints}
    >
      {/* <Grid paddingVertical={normalizedSize(16)}>{props.children}</Grid> */}
      <BottomSheetView>{props.children}</BottomSheetView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;
