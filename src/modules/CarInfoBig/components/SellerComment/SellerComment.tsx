import CardTitle from '@/components/Wrappers/CardTitle';
import { ICarBig } from '@/shared/types';
import Button from '@/shared/ui/buttons/Button';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface SellerCommentProps {
  car: ICarBig;
}

const SellerComment = ({ car }: SellerCommentProps) => {
  return (
    <CardTitle title="Комментарий продавца">
      <Typography variant="footnote">{car.description || ''}</Typography>
      <Button color="black">Проверить авто</Button>
      <Button variant="outline" color="black">
        Открыть объявление
      </Button>
    </CardTitle>
  );
};

export default SellerComment;
