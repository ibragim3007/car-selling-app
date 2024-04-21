import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import React from 'react';

const OpenAd = () => {
  return (
    <Card
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <Button style={{ width: '100%' }} color="green">
        Открыть объявление
      </Button>
    </Card>
  );
};

export default OpenAd;
