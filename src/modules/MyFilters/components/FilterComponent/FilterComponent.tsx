import { Dropdown } from '@/components/Dropdown/Dropdown';
import TableInfo from '@/components/Informers/TableInfo';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import EditIcon from '@/icons/linear/edit-2.svg';
import { useDeleteFilterMutation } from '@/shared/api/entityies/filters/filter.api';
import { IFilter } from '@/shared/types/filters.types';
import Divider from '@/shared/ui/divider/Divider';
import { router } from 'expo-router';
import React from 'react';
import Geography from './Section/Geography';
import Typography from '@/shared/ui/typography/Typography';
import { formatCurrency, priceFormat } from '@/shared/helpers/priceFormat';
import { formatNumber } from '@/shared/helpers/formatMileage';

interface FilterComponentProps {
  filter: IFilter;
}

const FilterComponent = ({ filter }: FilterComponentProps) => {
  const [deleteFilter, { isLoading }] = useDeleteFilterMutation();

  return (
    <CardTitle
      title={filter.name}
      rightHeader={
        <Dropdown
          isLoading={isLoading}
          items={[
            {
              Icon: EditIcon,
              title: 'Редактировать',
              onPress: () => router.push(`(mycollections)/filters/${filter.id}`),
            },
            {
              Icon: EditIcon,
              title: 'Копировать',
            },
            {
              Icon: EditIcon,
              title: 'Удалить',
              onPress: () => deleteFilter(filter.id),
              color: 'red',
            },
          ]}
        />
      }
    >
      <Divider />
      <TitleSwitch title="Включить подборку" value={filter.enabled} />
      {/* <SectionWrapper title="Марка">
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
      </SectionWrapper> */}
      <Geography filter={filter} />
      <TableInfo title="Цена, ₽" value={filter.prices?.map(price => formatNumber(price)).join(' - ')} />
      <TitleSwitch title="Уведомления (Telegram)" value={filter.notifications} />
    </CardTitle>
  );
};

export default FilterComponent;
