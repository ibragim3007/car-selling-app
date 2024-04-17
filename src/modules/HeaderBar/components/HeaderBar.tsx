import Phone from '@/icons/linear/call.svg';
import Search from '@/icons/linear/search-normal.svg';
import { useAppSelector } from '@/shared/hooks/storeHooks';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { View } from 'react-native';

const HeaderBar = () => {
  const { version } = useAppSelector(state => state.appReducer);
  return (
    <View style={{ flexDirection: 'row', gap: 20, marginRight: 20 }}>
      <Phone width={20} height={20} style={{ padding: 12 }} />
      <Search width={20} height={20} style={{ padding: 12 }} />
      <Typography>{version}</Typography>
    </View>
  );
};

export default HeaderBar;
