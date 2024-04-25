import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import React from 'react';

const OpenAd = () => {
  const { colors } = useTheme();
  return (
    <Card
      borderRadius={0}
      style={{
        flex: 0.12,
        borderTopWidth: 1,
        borderTopColor: colors.divider,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <Button style={{ width: '100%' }} color="green">
        Открыть объявление
      </Button>
    </Card>
  );
};

export default OpenAd;
