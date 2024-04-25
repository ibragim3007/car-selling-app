import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { closeModal } from '@/shared/store/modalReducer/actions/closeModal';
import { openModal } from '@/shared/store/modalReducer/actions/openModal';
import Button from '@/shared/ui/buttons/Button';
import ModalButton from '@/shared/ui/buttons/ModalButton';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const UnSubscripbeSuggestion = () => {
  const dispatch = useAppDispatch();
  const openAuthSuggestModal = () => {
    dispatch(
      openModal({
        title: 'Действие невозможно',
        subhead: 'Вы в демо-режиме или ваш доступ просрочен. Переход в карточку невозможен.',
        options: {
          callback1: { color: 'green' },
        },
        buttons: [
          <ModalButton color="green" key="1">
            Авторизоваться
          </ModalButton>,
          <ModalButton color="green" key="2">
            Оплатить тариф
          </ModalButton>,
          <ModalButton onPress={() => dispatch(closeModal())} key="3">
            Закрыть
          </ModalButton>,
        ],
      }),
    );
  };

  return (
    <Card borderRadius={0}>
      <Grid align="center" justfity="center" gap={12}>
        <Typography variant="subhead" weight="bold">
          Приложение в демо-режиме
        </Typography>
        <Typography variant="caption-1" style={{ textAlign: 'center' }}>
          Объявления показываются с 2-х часовой задержкой
        </Typography>
        <Button onPress={openAuthSuggestModal} size="small" style={{ width: '50%' }} color="black">
          Войти
        </Button>
      </Grid>
    </Card>
  );
};

export default UnSubscripbeSuggestion;
