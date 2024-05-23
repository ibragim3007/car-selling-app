import ArrowDown from '@/icons/linear/arrow-down.svg';
import { ISource, ISourceGroup } from '@/shared/types/source.types';

import LabelCheck from '@/shared/ui/inputs/LabelCheck';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import RowList from '../Informers/tables/RowList';
import { CheckboxCustom } from '@/shared/ui/inputs/Checkbox';
import { normalizedSize } from '@/shared/utils/size';
import { айдишники_фундоментальных_источников } from '@/shared/hooks/helpers/useTreeModalCheckbox';

interface TreeListItemProps {
  item: ISourceGroup;
  selectedValues: number[];
  selectedParents: number[];
  onPressCheck: (value: ISourceGroup) => void;
  onPressChildren: (value: ISource) => void;
  getCheckType: (parentId: number) => CheckboxCustom['type'];
  onPressFundomentalSource: (value: ISourceGroup) => void;
}

const TreeListItem = ({
  item,
  selectedValues,
  selectedParents,
  getCheckType,
  onPressCheck,
  onPressChildren,
  onPressFundomentalSource,
}: TreeListItemProps) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const isParrentSelected = selectedParents.includes(item.Id);

  const checkType = getCheckType(item.Id);

  if (айдишники_фундоментальных_источников.includes(item.Id)) {
    const isFundomentalSelected = selectedValues.includes(item.Id);
    return (
      <LabelCheck onPressLabel={() => onPressFundomentalSource(item)} label={item.Name} value={isFundomentalSelected} />
    );
  }

  return (
    <Grid flex={1}>
      <LabelCheck
        onPressCheck={() => onPressCheck(item)}
        onPressLabel={toggleList}
        rightSide={<ArrowDown style={{ transform: [{ rotate: isListOpen ? '0deg' : '180deg' }] }} />}
        label={item.Name}
        value={isParrentSelected}
        type={checkType}
      />

      {isListOpen &&
        item.Sources.map(source => (
          <RowList
            onChange={() => onPressChildren(source)}
            selectedValues={selectedValues}
            key={source.Id}
            value={source.Id}
            title={source.Name}
            style={{ paddingLeft: normalizedSize(30) }}
          />
        ))}
    </Grid>
  );
};

export default TreeListItem;
