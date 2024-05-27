import { Dropdown } from '@/components/Dropdown/Dropdown';
import TableInfo from '@/components/Informers/TableInfo';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import EditIcon from '@/icons/linear/edit-2.svg';
import { useDeleteFilterMutation } from '@/shared/api/entityies/filters/filter.api';
import { gears, ices, owners } from '@/shared/constants/enums/Car';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { formatNumber } from '@/shared/helpers/formatMileage';
import { IFilter } from '@/shared/types/filters.types';
import Divider from '@/shared/ui/divider/Divider';
import { router } from 'expo-router';
import React from 'react';
import CarsDisplay from './Section/CarsDisplay';
import Geography from './Section/Geography';
import Grid from '@/shared/ui/layout/Grid';

interface FilterComponentProps {
  filter: IFilter;
}

const FilterComponent = ({ filter }: FilterComponentProps) => {
  const [deleteFilter, { isLoading }] = useDeleteFilterMutation();

  const lastOwner = filter.ownersCount[filter.ownersCount.length - 1];

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
      <CarsDisplay filter={filter} />
      <Geography filter={filter} />
      <TableInfo title="Пробег, км" value={filter.mileages?.map(item => formatNumber(item)).join(' - ')} />
      <TableInfo title="Цена, ₽" value={filter.prices?.map(item => formatNumber(item)).join(' - ')} />
      <TableInfo title="Год выпуска" value={filter.years?.join(' - ')} />
      <TableInfo title="Объем двигателя, л" value={filter.iceValues?.join(' - ')} />
      <TableInfo title="Тип топлива" value={filter.ices?.map(item => enumCompare(ices, item)).join(', ')} />
      <TableInfo title="Коробка" value={filter.gears?.map(item => enumCompare(gears, item)).join(', ')} />
      <TableInfo title="Владельцы" value={enumCompare(owners, lastOwner)} />
      <Grid space="lg">
        <TitleSwitch title="Включить подборку" value={filter.enabled} />
        <TitleSwitch title="Уведомления (Telegram)" value={filter.notifications} />
      </Grid>
    </CardTitle>
  );
};

export default FilterComponent;
