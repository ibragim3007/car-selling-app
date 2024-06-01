import React from 'react';
import WrapperBlock from '../../wrapper/WrapperBlock';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import { useFormContext, useWatch } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';

const TelegramNotificationInput = () => {
  const { control, setValue } = useFormContext<IFilterCreate>();
  const notifications = useWatch({ control, name: 'notifications' });

  return (
    <WrapperBlock>
      <TitleSwitch
        onChange={() => setValue('notifications', !notifications, { shouldDirty: true })}
        value={notifications}
        title="Уведомления в Telegram"
      />
    </WrapperBlock>
  );
};

export default TelegramNotificationInput;
