import ArrowDown from '@/icons/linear/arrow-down.svg';
import { ISourceGroup } from '@/shared/types/source.types';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import RowList from '../Informers/tables/RowList';
import LabelCheck from '@/shared/ui/inputs/LabelCheck';

interface TreeListItemProps {
  item: ISourceGroup;
}

const TreeListItem = ({ item }: TreeListItemProps) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <Grid flex={1}>
      <LabelCheck
        onPressCheck={() => console.log('check')}
        onPressLabel={toggleList}
        rightSide={<ArrowDown style={{ transform: [{ rotate: isListOpen ? '0deg' : '180deg' }] }} />}
        label={item.Name}
      />

      {isListOpen && (
        <Grid style={{ marginLeft: 30 }}>
          {item.Sources.map(source => (
            <RowList key={source.Id} value={source.Id} title={source.Name} />
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default TreeListItem;
