import ImageLazy from '@/components/Informers/images/ImageLazy';
import CarSuggestionImage from '@/images/car_suggestion_image.png';
import { routes } from '@/shared/config/routes';
import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { toggleSuggestionCreateFilter } from '@/shared/store/carsPageReducer/actions/toggleSuggestionCreateFilter';
import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { router } from 'expo-router';
import React from 'react';

export const SuggestCreateFilter = () => {
  const { colors } = useTheme();

  const dispatch = useAppDispatch();

  const closeCard = () => {
    dispatch(toggleSuggestionCreateFilter());
  };

  const goToFilters = () => {
    router.push(routes.pages.filter.filters);
  };

  return (
    <Card borderRadius={16} style={{ backgroundColor: colors.accent.primary, overflow: 'hidden' }}>
      <Grid style={{ position: 'absolute', height: '100%', width: '100%', top: '5%', right: '-55%' }}>
        <ImageLazy style={{ height: normalizedSize(171), width: normalizedSize(272) }} source={CarSuggestionImage} />
      </Grid>
      <Grid style={{ maxWidth: '60%' }} space="sm">
        <Typography weight="bold" color="white">
          Твой выбор среди лучших авто!
        </Typography>
        <Typography variant="caption-1" color="white">
          Создай уникальную подборку и наслаждайся только тем, что по-настоящему тебе интересно
        </Typography>
        <Grid row space="sm">
          <Button onPress={goToFilters} size="small" color="black">
            Создать подборку
          </Button>
          <Button onPress={closeCard} size="small" color="black">
            Пропустить
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
