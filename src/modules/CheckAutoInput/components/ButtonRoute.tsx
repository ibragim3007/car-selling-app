import Input from '@/components/Controllers/Input/Input';
import { IItem } from '@/components/Controllers/buttons/ToggleButton';
import ErrorCard from '@/components/Informers/ErrorCard';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ButtonRouteProps {
  item: IItem;
}

const ButtonRoute = ({ item }: ButtonRouteProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const pressButton = () => {
    console.log('first');
  };
  return (
    <Grid space="sm">
      <Grid space="sm" row wrap>
        <Grid flex={1}>
          <Input
            name="some"
            control={control}
            placeholder={item.title}
            showError={false}
            rules={{ required: 'Нужны данные' }}
          />
        </Grid>
        <Button onPress={handleSubmit(pressButton)} size="small">
          Проверить
        </Button>
      </Grid>
      {errors.some && <ErrorCard text={errors.some?.message?.toString()} />}
    </Grid>
  );
};

export default ButtonRoute;
