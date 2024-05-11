import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import SearchInput from '../../buttons/SearchInput';
import Checkbox from '@/shared/ui/inputs/Checkbox';

const AutoChoiceList = () => {
  const [contril, setContril] = useState(false);
  return (
    <Grid>
      <Grid paddingHorizontal={12}>
        <SearchInput placeholder="Введите..." />
        <Grid padding={10} gap={10}>
          <Checkbox type="partial" value={contril} onValueChange={() => setContril(!contril)} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AutoChoiceList;
