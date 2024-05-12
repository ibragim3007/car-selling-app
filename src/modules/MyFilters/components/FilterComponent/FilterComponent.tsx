import { Dropdown } from '@/components/Dropdown/Dropdown';
import SurfaceInfo from '@/components/Informers/SurfaceInfo';
import TableInfo from '@/components/Informers/TableInfo';
import TitleSwitch from '@/components/TitleSwitch/TitleSwitch';
import CardTitle from '@/components/Wrappers/CardTitle';
import EditIcon from '@/icons/linear/edit-2.svg';
import { useDeleteFilterMutation } from '@/shared/api/entityies/filters/filter.api';
import { IFilter } from '@/shared/types/filters.types';
import Divider from '@/shared/ui/divider/Divider';
import Typography from '@/shared/ui/typography/Typography';
import { router } from 'expo-router';
import React from 'react';
import SectionWrapper from './Section/SectionWrapper';

interface FilterComponentProps {
  filter: IFilter;
}

const FilterComponent = ({ filter }: FilterComponentProps) => {
  const [deleteFilter] = useDeleteFilterMutation();

  return (
    <CardTitle
      title={filter.name}
      rightHeader={
        <Dropdown
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
      {filter.cityList && (
        <SectionWrapper title="География">
          {filter.cityList.map(city => (
            <SurfaceInfo key={city.id}>
              <Typography>{city.name}</Typography>
            </SurfaceInfo>
          ))}
        </SectionWrapper>
      )}
      {/* <SectionWrapper title="Цена, ₽">
        <Typography>{filter.horsepower.join(', ')}</Typography>
      </SectionWrapper> */}

      <TableInfo title="Пробег, км" value={filter.mileages.join('-')} />
      <TableInfo title="Повреждения" value={filter.carState} />
      <TableInfo title="Цена, ₽" value={filter.pricechanges.join('-')} />
      {/* <TableInfo title="Год выпуска" value={filter} /> */}
      <TableInfo title="Объем двигателя, л" value={filter.ices.join('-')} />
      <TableInfo title="Пробег, км" value={filter.mileages.join('-')} />
      <TableInfo title="Владельцы" value={filter.owners} />
      {/* <TableInfo title="Тип топлива" value={filter.mileages.join('-')} /> */}

      <TitleSwitch title="Уведомления (Telegram)" value={filter.notifications} />
    </CardTitle>
  );
};

export default FilterComponent;
