import { useModalcheckbox } from '@/shared/hooks/helpers/useModalcheckbox';
import { IFilterCreate } from '@/shared/types/filters.types';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import BottomSheetModal, { CustomBottomSheetModalProps } from '../Modal/BottomSheetModal';
import MainPage, { MainPagePropsGlobal } from './components/MainPage';
import QuitResetHeader from '../Modal/components/QuitResetHeader';

export type Ref = BSM;

interface ModalCheckboxListProps {
  bottomSheetModal: CustomBottomSheetModalProps;
  formApi: UseFormReturn<IFilterCreate, any, undefined>;
  pageData: MainPagePropsGlobal;
}

const ModalCheckboxList = React.forwardRef<Ref, ModalCheckboxListProps>((props, ref) => {
  const checkModalboxUse = useModalcheckbox(props.pageData);
  return (
    <BottomSheetModal
      handleComponent={() => (
        <QuitResetHeader reset={checkModalboxUse.reset} title={props.bottomSheetModal.title || ''} />
      )}
      snapPoints={['90%']}
      ref={ref}
      {...props.bottomSheetModal}
    >
      <FormProvider {...props.formApi}>
        <MainPage {...props.pageData} checkModalboxUse={checkModalboxUse} />
      </FormProvider>
    </BottomSheetModal>
  );
});

export default ModalCheckboxList;
