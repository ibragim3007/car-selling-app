import Select from '@/components/Controllers/Input/Select/Select';
import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import { owners, states } from '@/shared/constants/enums/Car';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { IFilterCreate } from '@/shared/types/filters.types';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

const StateInput = () => {
  const { control } = useFormContext<IFilterCreate>();

  const { field } = useController({ control, name: 'owners' });

  return (
    <Card borderRadius={16}>
      <Grid space="lg">
        <Grid space="sm">
          <Typography>Повреждения</Typography>
          <ToggleButton
            items={states}
            Item={(item, index) => (
              <ToggleButtonItem
                onPress={item => console.log(item)}
                key={item.id}
                currentValue={null}
                title={item.text}
                value={item.id}
                length={states.length}
                index={index}
                item={item}
              />
            )}
          />
        </Grid>
        <Grid space="sm">
          <Typography>Владельцы по ПТС</Typography>
          <Select
            title="Владельцы по ПТС"
            name="owners"
            value={enumCompare(owners, field.value!)}
            control={control}
            data={owners}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default StateInput;
