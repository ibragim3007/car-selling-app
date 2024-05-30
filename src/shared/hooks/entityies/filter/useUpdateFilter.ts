import { useEditFilterMutation } from '@/shared/api/entityies/filters/filter.api';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { IFilter } from '@/shared/types/filters.types';

export const useUpdateFilter = (filter: IFilter) => {
  const [updateFilter, { isLoading }] = useEditFilterMutation();

  const updateFillter = async (filter: IFilter, fieldsToUpdate: Partial<IFilter>) => {
    const newFilter = { ...filter, ...fieldsToUpdate };

    try {
      await updateFilter({
        filter: newFilter,
        id: String(filter.id),
      }).unwrap();
    } catch (e) {
      Inform.error(e);
    }
  };

  const toggleEnableFilter = () => {
    void updateFillter(filter, { enabled: !filter.enabled });
  };

  const toggleNotifications = () => {
    void updateFillter(filter, { notifications: !filter.notifications });
  };

  return {
    isLoading,
    toggleEnableFilter,
    toggleNotifications,
  };
};
