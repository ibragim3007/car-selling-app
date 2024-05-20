import { TreeListPropsGlobal } from '@/components/ModalTreeCheckbox/TreeList';
import { ISourceGroup } from '@/shared/types/source.types';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

export const useTreeModalCheckbox = ({ items }: TreeListPropsGlobal) => {
  const keyExtractor = useCallback((item: ISourceGroup, i: number) => `${i}-${item.Id}`, []);

  const formApi = useFormContext();

  return {
    keyExtractor,
  };
};
