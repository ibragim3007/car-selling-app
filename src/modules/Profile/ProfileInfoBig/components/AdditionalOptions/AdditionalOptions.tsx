import StarIcon from '@/icons/linear/star.svg';
import { routes } from '@/shared/config/routes';
import RowButton from '@/shared/ui/buttons/RowBotton';
import GroupDropButton from '@/shared/ui/layout/GroupDropButton';
import { router } from 'expo-router';
import React from 'react';

const AdditionalOptions = () => {
  return (
    <GroupDropButton>
      <RowButton title="Оценить нас" Icon={StarIcon} />
      <RowButton title="Справка" Icon={StarIcon} />
      <RowButton
        onPress={() => router.push(routes.pages.settings.index)}
        title="Настройки приложения"
        Icon={StarIcon}
      />
      <RowButton title="Написать оператору" Icon={StarIcon} />
    </GroupDropButton>
  );
};

export default AdditionalOptions;
