import { Dropdown } from '@/components/Dropdown/Dropdown';
import SurfaceInfo from '@/components/Informers/SurfaceInfo';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import EditIcon from '@/icons/linear/edit-2.svg';
import Badge from '@/shared/ui/badge/Badge';
import Divider from '@/shared/ui/divider/Divider';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import SectionWrapper from './Section/SectionWrapper';
import RowInfo from '@/components/Informers/RowInfo';

const FilterComponent = () => {
  return (
    <CardTitle
      title="Подборка 1"
      rightHeader={
        <Dropdown
          items={[
            {
              Icon: EditIcon,
              title: 'Редактировать',
            },
            {
              Icon: EditIcon,
              title: 'Копировать',
            },
            {
              Icon: EditIcon,
              title: 'Удалить',
              color: 'red',
            },
          ]}
        />
      }
    >
      <Divider />
      <TitleSwitch title="Включить подборку" />
      <SectionWrapper title="Марка">
        <SurfaceInfo>
          <Typography>Audi</Typography>
          <Badge value={56} />
        </SurfaceInfo>
        <SurfaceInfo>
          <Typography>Audi</Typography>
          <Badge value={56} />
        </SurfaceInfo>
        <SurfaceInfo>
          <Typography>Audi</Typography>
          <Badge value={56} />
        </SurfaceInfo>
      </SectionWrapper>
      <SectionWrapper title="География">
        <SurfaceInfo>
          <Typography>Екатернбург</Typography>
        </SurfaceInfo>
        <SurfaceInfo>
          <Typography>Омск</Typography>
        </SurfaceInfo>
        <SurfaceInfo>
          <Typography>Ростов-на-Дону</Typography>
        </SurfaceInfo>
      </SectionWrapper>
      <TitleSwitch title="Уведомления (Telegram)" />
    </CardTitle>
  );
};

export default FilterComponent;
