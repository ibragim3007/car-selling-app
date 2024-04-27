import Input from '@/components/Controllers/Input/Input';
import { IItem } from '@/components/Controllers/buttons/ToggleButton';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ButtonRouteProps {
  item: IItem;
}

const ButtonRoute = ({ item }: ButtonRouteProps) => {
  const { control } = useForm();

  return (
    <Grid space="sm" row wrap>
      <Grid flex={1}>
        <Input name="some" control={control} placeholder={item.title} />
      </Grid>
      <Button size="small">Проверить</Button>
    </Grid>
  );
};

export default ButtonRoute;
