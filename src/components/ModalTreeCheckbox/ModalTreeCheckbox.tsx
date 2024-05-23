import { useTreeModalCheckbox } from '@/shared/hooks/helpers/useTreeModalCheckbox';
import { IFilterCreate } from '@/shared/types/filters.types';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import BottomSheetModal, { CustomBottomSheetModalProps } from '../Modal/BottomSheetModal';
import TreeList, { TreeListPropsGlobal } from './TreeList';
import Grid from '@/shared/ui/layout/Grid';
import QuitResetHeader from '../Modal/components/QuitResetHeader';
import Typography from '@/shared/ui/typography/Typography';

export type Ref = BSM;

interface ModalTreeCheckboxProps {
  bottomSheetModal: CustomBottomSheetModalProps;
  formApi: UseFormReturn<IFilterCreate, any, undefined>;
  pageData: TreeListPropsGlobal;
}

const ModalTreeCheckbox = React.forwardRef<Ref, ModalTreeCheckboxProps>((props, ref) => {
  const checkModalboxUse = useTreeModalCheckbox(props.pageData);
  return (
    <BottomSheetModal
      handleComponent={() => <QuitResetHeader reset={checkModalboxUse.reset} title={'Источники'} />}
      snapPoints={['90%']}
      ref={ref}
      {...props.bottomSheetModal}
    >
      <FormProvider {...props.formApi}>
        <Grid flex={1}>
          <Typography style={{ padding: 10 }}>{JSON.stringify(checkModalboxUse.selectedValues)}</Typography>
          <TreeList {...props.pageData} checkModalboxUse={checkModalboxUse} />
        </Grid>
      </FormProvider>
    </BottomSheetModal>
  );
});

export default ModalTreeCheckbox;
