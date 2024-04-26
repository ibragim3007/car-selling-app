import RowInfo from '@/components/Informers/RowInfo';
import PhoneNumber from '@/components/Supported/PhoneNumber';
import ToMail from '@/components/Supported/ToMail';
import CardTitle from '@/components/Wrappers/CardTitle';
import { SUPPORT_NUMBER } from '@/shared/config/config';
import { formatPhoneNumber } from '@/shared/helpers/formatPhoneNumber';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Grid from '@/shared/ui/layout/Grid';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
const ContactInfo = () => {
  return (
    <Grid>
      <CardTitle title="Контакты" isNoPadding>
        <RowInfo
          valueProps={{ color: 'success' }}
          title="Телефон"
          value={formatPhoneNumber(SUPPORT_NUMBER) || 0}
          isEven
          transparent
        >
          <PhoneNumber />
        </RowInfo>
        <RowInfo valueProps={{ color: 'success' }} title="Email" value={12312} isEven transparent>
          <ToMail />
        </RowInfo>

        <RowInfo valueProps={{ color: 'success' }} title="Сообщества" isEven transparent>
          <Grid row space="lg">
            <Link href="https://vk.com">
              <FontAwesome6 name="vk" size={32} color="#0077FF" />
            </Link>
            <Link href="https://youtube.com">
              <FontAwesome name="youtube-play" size={32} color={'#FF0000'} />
            </Link>
            <Link href="https://telegram.org">
              <FontAwesome name="telegram" size={32} color={'#2AABEE'} />
            </Link>
          </Grid>
        </RowInfo>
      </CardTitle>
    </Grid>
  );
};

export default ContactInfo;
