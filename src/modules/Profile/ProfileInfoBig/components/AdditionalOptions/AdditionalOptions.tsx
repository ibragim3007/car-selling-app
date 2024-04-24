import StarIcon from '@/icons/linear/star.svg';
import RowButton from '@/shared/ui/buttons/RowBotton';
import GroupDropButton from '@/shared/ui/layout/GroupDropButton';
import React from 'react';

const AdditionalOptions = () => {
  return (
    <GroupDropButton>
      <RowButton title="Оценить нас" Icon={StarIcon} />
      <RowButton title="Справка" Icon={StarIcon} />
      <RowButton title="Настройки приложения" Icon={StarIcon} />
      <RowButton title="Написать оператору" Icon={StarIcon} />
    </GroupDropButton>
  );
};

export default AdditionalOptions;
