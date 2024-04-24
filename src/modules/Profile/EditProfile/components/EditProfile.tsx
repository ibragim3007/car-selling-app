import { Dropdown } from '@/components/Dropdown/Dropdown';
import EditIcon from '@/icons/linear/edit-2.svg';
import LogOutIcon from '@/icons/linear/logout.svg';
import React from 'react';
import { View } from 'react-native';
const EditProfile = () => {
  return (
    <View style={{ marginRight: 20 }}>
      <Dropdown
        items={[
          { title: 'Редактировать профиль', Icon: EditIcon },
          { title: 'Сменить пользователя', Icon: LogOutIcon, color: 'red' },
        ]}
      />
    </View>
  );
};

export default EditProfile;
