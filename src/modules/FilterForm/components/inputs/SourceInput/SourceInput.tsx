import SelectButtonWrap from '@/components/Controllers/Input/Select/SelectButtonWrap';
import ModalTreeCheckbox from '@/components/ModalTreeCheckbox/ModalTreeCheckbox';
import { useSitesQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';

const SourceInput = () => {
  const formApi = useFormContext();
  const { data: site } = useSitesQuery();

  const buttomSheetRef = useRef<BTMS>(null);

  return (
    <WrapperBlock>
      <WrapInputLabel title="Тип продавца">
        {/* <SCBList name={'ownerType'} title={'Тип продавца'} items={[]} /> */}
      </WrapInputLabel>
      <WrapInputLabel title="Источники">
        <SelectButtonWrap onPress={() => buttomSheetRef.current?.present()} control={formApi.control} name="sites" />
        <ModalTreeCheckbox
          bottomSheetModal={{
            title: 'Источники',
            children: null,
          }}
          formApi={formApi}
          ref={buttomSheetRef}
          pageData={{
            items: site?.sourceGroups || [],
            name: 'sites',
          }}
        />
      </WrapInputLabel>
    </WrapperBlock>
  );
};

export default SourceInput;
