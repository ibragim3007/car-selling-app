import DisplayGeography from '@/components/DisplaySurfaces/DisplayGeography';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import TableInfo from '@/components/Informers/TableInfo';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import ArrowDown from '@/icons/linear/arrow-down.svg';
import EditIcon from '@/icons/linear/edit-2.svg';
import { useDeleteFilterMutation } from '@/shared/api/entityies/filters/filter.api';
import { gears, ices, owners } from '@/shared/constants/enums/Car';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { formatNumber } from '@/shared/helpers/formatMileage';
import { useUpdateFilter } from '@/shared/hooks/entityies/filter/useUpdateFilter';
import { IFilter } from '@/shared/types/filters.types';
import LayoutAnimation from '@/shared/ui/animations/LayoutAnimation';
import Button from '@/shared/ui/buttons/Button';
import Divider from '@/shared/ui/divider/Divider';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { router } from 'expo-router';
import React, { useState } from 'react';
import CarsDisplay from './Section/CarsDisplay';
import SectionWrapper from './Section/SectionWrapper';
interface FilterComponentProps {
  filter: IFilter;
}

const FilterComponent = ({ filter }: FilterComponentProps) => {
  const [deleteFilter, { isLoading }] = useDeleteFilterMutation();
  const { toggleEnableFilter, toggleNotifications } = useUpdateFilter(filter);

  const lastOwner = filter.ownersCount[filter.ownersCount.length - 1];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardTitle
      style={{ overflow: 'hidden' }}
      headerProps={{ style: { paddingVertical: normalizedSize(8), paddingHorizontal: normalizedSize(16) } }}
      titleProps={{ style: { paddingHorizontal: 0, paddingVertical: 0 } }}
      title={filter.name}
      isNoPadding
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
              title: 'Копировать',
            },
            {
              title: 'Удалить',
              onPress: () => deleteFilter(filter.id),
              color: 'red',
            },
          ]}
        />
      }
    >
      <LayoutAnimation>
        <Grid paddingHorizontal={16} space="sm" style={{ maxHeight: isOpen ? 'auto' : 310, overflow: 'hidden' }}>
          <Divider />
          <Grid space="lg">
            <TitleSwitch onChange={toggleEnableFilter} title="Включить подборку" value={filter.enabled} />
            <TitleSwitch onChange={toggleNotifications} title="Уведомления (Telegram)" value={filter.notifications} />
          </Grid>
          <Divider />
          <CarsDisplay filter={filter} />

          <SectionWrapper title="География">
            <DisplayGeography regions={filter.regions || []} />
          </SectionWrapper>

          <TableInfo title="Пробег, км" value={filter.mileages?.map(item => formatNumber(item)).join(' - ')} />
          <TableInfo title="Цена, ₽" value={filter.prices?.map(item => formatNumber(item)).join(' - ')} />
          <TableInfo title="Год выпуска" value={filter.years?.join(' - ')} />
          <TableInfo title="Объем двигателя, л" value={filter.iceValues?.join(' - ')} />
          <TableInfo title="Тип топлива" value={filter.ices?.map(item => enumCompare(ices, item)).join(', ')} />
          <TableInfo title="Коробка" value={filter.gears?.map(item => enumCompare(gears, item)).join(', ')} />
          <TableInfo title="Владельцы" value={enumCompare(owners, lastOwner)} />
        </Grid>
      </LayoutAnimation>
      <Button onPress={() => setIsOpen(!isOpen)} style={{ marginTop: 10 }} variant="text" color="black">
        {isOpen ? 'Скрыть' : 'Раскрыть'} <ArrowDown style={{ transform: [{ rotate: isOpen ? '0deg' : '180deg' }] }} />
      </Button>
    </CardTitle>
  );
};

export default FilterComponent;
