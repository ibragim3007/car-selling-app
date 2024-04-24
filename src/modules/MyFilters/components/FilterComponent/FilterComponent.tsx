import { Dropdown } from '@/components/Dropdown/Dropdown';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import EditIcon from '@/icons/linear/edit-2.svg';
import Divider from '@/shared/ui/divider/Divider';
import React from 'react';

const FilterComponent = () => {
  return (
    <CardTitle
      title="Подборка 1"
      rightHeader={
        <Dropdown
          items={[
            {
              Icon: EditIcon,
              title: 'Редактировать',
            },
            {
              Icon: EditIcon,
              title: 'Копировать',
            },
            {
              Icon: EditIcon,
              title: 'Удалить',
              color: 'red',
            },
          ]}
        />
      }
    >
      <Divider />
      <TitleSwitch title="Включить подборку" />
      <TitleSwitch title="Уведомления (Telegram)" />
    </CardTitle>
  );
};

export default FilterComponent;
