import Button from '@/shared/ui/buttons/Button';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';

import React from 'react';
import { ScrollView, View } from 'react-native';

const HomePage = () => {
  return (
    <ScrollView>
      <View style={{ gap: normalizedSize(10), margin: normalizedSize(20) }}>
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
      </View>
    </ScrollView>
  );
};

export default HomePage;
