import CardTitle from '@/components/Wrappers/CardTitle';
import Button from '@/shared/ui/buttons/Button';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const SellerComment = () => {
  return (
    <CardTitle title="Комментарий продавца">
      <Typography variant="footnote">
        Продам отличный ЛЕНД камеры в круг, все элементы железа родные. Торг строго у капота , в помощи не нуждаюсь
        продаю сам машина оформлена на меня Проверить авто Открыть объявление
      </Typography>
      <Button color="black">Проверить авто</Button>
      <Button variant="outline" color="black">
        Открыть объявление
      </Button>
    </CardTitle>
  );
};

export default SellerComment;
