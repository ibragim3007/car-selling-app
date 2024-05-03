import CardTitle from '@/components/Wrappers/CardTitle';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const DeleteProfilePage = () => {
  return (
    <ScrollViewPage spaceVertical="sm">
      <CardTitle title={'Пожалуйста, прочтите внимательно '} borderRadius={16}>
        <Grid space="md">
          <Typography variant="subhead">
            Удаление вашего аккаунта является необратимым действием. Учитывайте следующие моменты перед тем, как принять
            окончательное решение:
          </Typography>
          <Typography variant="subhead">
            {'\u25CF '}
            <Typography weight="bold">Потеря данных:</Typography> Все ваши личные данные, включая профиль, настройки,
            сохраненные предпочтения и историю активности будут безвозвратно удалены. Восстановление этих данных после
            удаления аккаунта невозможно.
          </Typography>
          <Typography variant="subhead">
            {'\u25CF '}
            <Typography weight="bold">Сервисы и подписки: </Typography>Если вы используете подписки или связанные
            сервисы, они также будут отменены. Это может включать доступ к специализированным функциям или контенту,
            который больше не будет доступен.
          </Typography>
          <Button color="red">Удалить аккаунт</Button>
        </Grid>
      </CardTitle>
    </ScrollViewPage>
  );
};

export default DeleteProfilePage;
