import { useTheme } from '@/shared/hooks/stable/useTheme';
import { useAppDispatch } from '@/shared/hooks/storeHooks';
import { switchTheme } from '@/shared/store/themeReducer/actions/switchTheme';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Tag from '@/shared/ui/tags/Tag';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';

import React from 'react';
import { ScrollView, Switch, View } from 'react-native';

const HomePage = () => {
  const { currentTheme } = useTheme();

  const dispath = useAppDispatch();
  const swtichTheme = () => {
    dispath(switchTheme());
  };

  return (
    <PageBackground>
      <ScrollView>
        <View style={{ gap: normalizedSize(10), margin: normalizedSize(20) }}>
          <Grid row align="center" gap={8}>
            <Switch value={currentTheme === 'light' ? false : true} onChange={swtichTheme} />
            <Typography>Тема</Typography>
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
        </View>
      </ScrollView>
    </PageBackground>
  );
};

export default HomePage;
