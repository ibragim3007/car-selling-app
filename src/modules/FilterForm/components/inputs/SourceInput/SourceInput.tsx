import SelectButtonWrap from '@/components/Controllers/Input/Select/SelectButtonWrap';
import ModalTreeCheckbox from '@/components/ModalTreeCheckbox/ModalTreeCheckbox';
import { useSitesQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { IFilterCreate } from '@/shared/types/filters.types';
import { ISourceGroup } from '@/shared/types/source.types';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';

const SourceInput = () => {
  const formApi = useFormContext<IFilterCreate>();
  const { data: site } = useSitesQuery();

  const sites = useWatch({ control: formApi.control, name: 'sites' });

  const buttomSheetRef = useRef<BTMS>(null);
  const valueInput = getNamesByIds(site?.sourceGroups || [], sites || []);
  return (
    <WrapperBlock>
      <WrapInputLabel title="Тип продавца">
        {/* <SCBList name={'ownerType'} title={'Тип продавца'} items={[]} /> */}
      </WrapInputLabel>
      <WrapInputLabel title="Источники">
        <SelectButtonWrap
          value={valueInput}
          onPress={() => buttomSheetRef.current?.present()}
          control={formApi.control}
          name="sites"
        />
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

const getNamesByIds = (sourceGroups: ISourceGroup[], ids: number[]): string => {
  const result: string[] = [];

  sourceGroups.forEach(group => {
    // Check if the group's Id is in the ids array
    if (ids.includes(group.Id)) {
      result.push(group.Name);
    }

    // Check each source in the group
    group.Sources.forEach(source => {
      if (ids.includes(source.Id)) {
        result.push(source.Name);
      }
    });
  });

  return result.join(', ');
};
