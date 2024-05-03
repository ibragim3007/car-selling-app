import { Dropdown } from '@/components/Dropdown/Dropdown';
import EditIcon from '@/icons/linear/edit-2.svg';
import LogOutIcon from '@/icons/linear/logout.svg';
import { routes } from '@/shared/config/routes';
import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { closeModal } from '@/shared/store/modalReducer/actions/closeModal';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
const EditProfile = () => {
  const dispatch = useAppDispatch();
  const goToEdit = () => {
    dispatch(closeModal());
    router.push(routes.pages.profile.edit);
  };
  return (
    <View style={{ marginRight: 20 }}>
      <Dropdown
        items={[
          { title: 'Редактировать профиль', Icon: EditIcon, onPress: goToEdit },
          { title: 'Сменить пользователя', Icon: LogOutIcon, color: 'red' },
        ]}
      />
    </View>
  );
};

export default EditProfile;
