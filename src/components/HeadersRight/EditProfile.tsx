import { Dropdown } from '@/components/Dropdown/Dropdown';
import EditIcon from '@/icons/linear/edit-2.svg';
import LogOutIcon from '@/icons/linear/logout.svg';
import { routes } from '@/shared/config/routes';
import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { logOut } from '@/shared/store/appReducer/actions/auth/logOut';
import { closeModal } from '@/shared/store/modalReducer/actions/closeModal';
import { openModal } from '@/shared/store/modalReducer/actions/openModal';
import ModalButton from '@/shared/ui/buttons/ModalButton';
import Typography from '@/shared/ui/typography/Typography';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
const EditProfile = () => {
  const dispatch = useAppDispatch();
  const goToEdit = () => {
    dispatch(closeModal());
    router.push(routes.pages.profile.edit);
  };
  const [loadingLogOut, setLoadingLogOut] = useState(false);

  const changeUser = async () => {
    setLoadingLogOut(true);
    dispatch(closeModal());
    await dispatch(logOut());
    setLoadingLogOut(false);
    router.push(routes.auth.login);
  };

  const openModalForChangeUser = () => {
    dispatch(
      openModal({
        subhead: '',
        type: 'horizontal',
        children: (
          <Typography textAlign="center" variant="subhead" weight="medium">
            Вы уверены, что хотите сменить пользователя?
          </Typography>
        ),
        buttons: [
          <ModalButton onPress={() => dispatch(closeModal())} size="small" key="1">
            Отменить
          </ModalButton>,
          <ModalButton loading={loadingLogOut} onPress={changeUser} size="small" color="green" key="2">
            Подтвердить
          </ModalButton>,
        ],
      }),
    );
  };
  return (
    <View style={{ marginRight: 20 }}>
      <Dropdown
        items={[
          { title: 'Редактировать профиль', Icon: EditIcon, onPress: goToEdit },
          { title: 'Сменить пользователя', Icon: LogOutIcon, color: 'red', onPress: openModalForChangeUser },
        ]}
      />
    </View>
  );
};

export default EditProfile;
