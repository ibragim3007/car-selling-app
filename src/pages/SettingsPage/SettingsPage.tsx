import GoInButton from '@/components/Controllers/buttons/GoInButton';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { switchTheme } from '@/shared/store/themeReducer/actions/switchTheme';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import SwitchCustom from '@/shared/ui/switch/Switch';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Alert } from 'react-native';

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useTheme();
  const isDark = currentTheme === 'dark';
  const pressChangeTheme = () => {
    void dispatch(switchTheme());
  };
  return (
    <ScrollViewPage spaceVertical="sm">
      <Grid space="md" style={{ marginBottom: 50 }}>
        <CardTitle title="Звонок через SIP" rightHeader={<SwitchCustom />}>
          <Typography variant="subhead" color="secondary">
            Включите эту функцию, чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто
            звонки совершаются с разных номеров
          </Typography>
        </CardTitle>
        <CardTitle title="Уведомления">
          <Typography variant="subhead" color="secondary">
            Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей
            подборки
          </Typography>
          <GoInButton
            name="notif"
            fn={() => Alert.alert('IN progress...')}
            title={'Уведомления'}
            value={'Push уведомления'}
          />
        </CardTitle>
        {/* <BottomSheetModal title={'Уведомления'} /> */}
        <CardTitle title="Варианты перехода">
          <Typography variant="subhead" color="secondary">
            Выберите, куда будет совершаться переход при клике на ленту объявлений
          </Typography>
          <GoInButton
            name="notif"
            fn={() => Alert.alert('IN progress...')}
            title={'Переходы'}
            value={'В карточку, в текущем окне'}
          />
        </CardTitle>
        <CardTitle title="Варианты перехода">
          <Grid space="lg">
            <GoInButton name="notif" fn={() => Alert.alert('IN progress...')} title={'Часовой пояс'} value={'Москва'} />
            <TitleSwitch title="Цвета в ленте" />
            <TitleSwitch value={isDark} onChange={pressChangeTheme} title="Темная тема" />
          </Grid>
        </CardTitle>
      </Grid>
    </ScrollViewPage>
  );
};

export default SettingsPage;
