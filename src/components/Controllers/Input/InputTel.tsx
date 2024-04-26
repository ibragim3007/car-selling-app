import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import Input from './Input';
import { Control, FieldValues } from 'react-hook-form';
import { PHONE_REGEX } from '@/shared/constants/regex/regex';

interface InputTelProps {
  control: Control<FieldValues, any>;
  name: string;
}

const InputTel = ({ control, name }: InputTelProps) => {
  return (
    <Grid space="sm">
      <Typography weight="bold">Введите номер</Typography>
      <Grid row align="center" space="sm">
        <Typography weight="bold">+7</Typography>
        <Grid flex={1}>
          <Input
            keyboardType="phone-pad"
            name={name}
            control={control}
            placeholder="(000) 000-00-00"
            textContentType="telephoneNumber"
            showError={false}
            rules={{
              required: 'Необходимо ввести номер телефона',
              pattern: {
                value: PHONE_REGEX,
                message: 'Неверный формат номера телефона',
              },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputTel;
