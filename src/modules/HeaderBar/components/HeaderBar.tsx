import Phone from '@/icons/linear/call.svg';
import Search from '@/icons/linear/search-normal.svg';
import React from 'react';
import { View } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 20, marginRight: 20 }}>
      <Phone width={20} height={20} style={{ padding: 12 }} />
      <Search width={20} height={20} style={{ padding: 12 }} />
    </View>
  );
};

export default HeaderBar;
