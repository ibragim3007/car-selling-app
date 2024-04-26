import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import HomeHeaderInfo from '@/modules/HomeHeaderHelp';
import NewsSlider from '@/modules/NewsSlider';

import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { switchTheme } from '@/shared/store/themeReducer/actions/switchTheme';
import { updatePrimary } from '@/shared/store/themeReducer/actions/updatePrimary';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';

import React from 'react';
import { ScrollView } from 'react-native';

const HomePage = () => {
  const { currentTheme } = useTheme();

  const dispatch = useAppDispatch();
  const swtichTheme = () => {
    dispatch(switchTheme());
  };

  const changeTheme = (color: string) => {
    dispatch(updatePrimary(color));
  };

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <PageBackground color="primary">
        {/* <UnSubscripbeSuggestion /> */}
        <Grid space="md" paddingTop={8}>
          <Grid flex={1} paddingHorizontal={8}>
            <HomeHeaderInfo />
          </Grid>
          <Grid flex={1}>
            <NewsSlider />
          </Grid>
        </Grid>
        {/* <ScrollView>
        <View style={{ gap: normalizedSize(10), margin: normalizedSize(20) }}>
          <Grid row align="center" gap={8}>
            <Switch value={currentTheme === 'light' ? false : true} onChange={swtichTheme} />
            <Typography>Тема</Typography>
          </Grid>
          <Grid row wrap gap={10}>
            <Button style={{ backgroundColor: 'orange' }} onPress={() => changeTheme('orange')}>
              primary
            </Button>
            <Button style={{ backgroundColor: 'dodgerblue' }} onPress={() => changeTheme('dodgerblue')}>
              primary
            </Button>
            <Button style={{ backgroundColor: 'violet' }} onPress={() => changeTheme('violet')}>
              primary
            </Button>
            <Button style={{ backgroundColor: '#DE3163' }} onPress={() => changeTheme('#DE3163')}>
              primary
            </Button>
          </Grid>
          <Typography variant="largeTitle">largeTitle</Typography>
          <Typography variant="title-1">Title-1</Typography>
          <Typography variant="title-2">Title-2</Typography>
          <Typography variant="title-3">Title-3</Typography>
          <Typography variant="headline">headline</Typography>
          <Typography variant="body">body</Typography>
          <Typography variant="callout">callout</Typography>
          <Typography variant="subhead">subhead</Typography>
          <Typography variant="footnote">footnote</Typography>
          <Typography variant="caption-1">caption-1</Typography>
          <Typography variant="caption-2">caption-2</Typography>

          <Button>Green</Button>
          <Button variant="outline">Outline Green</Button>
          <Button variant="ghost">Ghost Green</Button>
          <Button variant="text">Text Green</Button>
          <Button color="black">Black</Button>
          <Button color="black" variant="outline">
            Outline Black
          </Button>
          <Button color="black" variant="ghost">
            Ghost Black
          </Button>
          <Button color="black" variant="text">
            Ghost Black
          </Button>
          <Grid wrap row gap={20}>
            <Tag color="green">Tag</Tag>
            <Tag color="black">Tag</Tag>
            <Tag color="red">Tag</Tag>
            <Tag color="yellow">Tag</Tag>
            <Tag color="purple">Tag</Tag>
          </Grid>
          <Grid wrap row gap={20}>
            <Tag size="small" color="green">
              Tag
            </Tag>
            <Tag size="small" color="black">
              Tag
            </Tag>
            <Tag size="small" color="red">
              Tag
            </Tag>
            <Tag size="small" color="yellow">
              Tag
            </Tag>
            <Tag size="small" color="purple">
              Tag
            </Tag>
          </Grid>
          <Grid gap={10} row>
            <Grid gap={10}>
              <TagPrice amount={12002000} isRised />
              <TagPrice amount={512510} isRised={false} />
            </Grid>
            <Grid gap={10}>
              <TagPrice amount={12002000} isRised size="small" />
              <TagPrice amount={512510} isRised={false} size="small" />
            </Grid>
          </Grid>
        </View>
      </ScrollView> */}
      </PageBackground>
    </ScrollView>
  );
};

export default HomePage;
