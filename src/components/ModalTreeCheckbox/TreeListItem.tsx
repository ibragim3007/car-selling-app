import ArrowDown from '@/icons/linear/arrow-down.svg';
import { ISource, ISourceGroup } from '@/shared/types/source.types';

import LabelCheck from '@/shared/ui/inputs/LabelCheck';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import RowList from '../Informers/tables/RowList';

interface TreeListItemProps {
  item: ISourceGroup;
  selectedValues: number[];
  selectedParents: number[];
  onPressCheck: (value: ISourceGroup) => void;
  onPressChildren: (value: ISource) => void;
}

const TreeListItem = ({ item, selectedValues, selectedParents, onPressCheck, onPressChildren }: TreeListItemProps) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const isParrentSelected = selectedParents.includes(item.Id);

  return (
    <Grid flex={1}>
      <LabelCheck
        onPressCheck={() => onPressCheck(item)}
        onPressLabel={toggleList}
        rightSide={<ArrowDown style={{ transform: [{ rotate: isListOpen ? '0deg' : '180deg' }] }} />}
        label={item.Name}
        value={isParrentSelected}
      />

      {isListOpen && (
        <Grid style={{ marginLeft: 30 }}>
          {item.Sources.map(source => (
            <RowList
              onChange={() => onPressChildren(source)}
              selectedValues={selectedValues}
              key={source.Id}
              value={source.Id}
              title={source.Name}
            />
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default TreeListItem;
