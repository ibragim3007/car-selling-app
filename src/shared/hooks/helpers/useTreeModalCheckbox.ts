import { TreeListPropsGlobal } from '@/components/ModalTreeCheckbox/TreeList';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { IFilterCreate } from '@/shared/types/filters.types';
import { ISourceGroup } from '@/shared/types/source.types';
import { CheckboxCustom } from '@/shared/ui/inputs/Checkbox';
import { addUniqueValues } from '@/shared/utils/addUniqueValues';
import { removeMatchingValues } from '@/shared/utils/removeMatchingValues';
import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useTreeModalCheckbox = ({ items }: TreeListPropsGlobal) => {
  const keyExtractor = useCallback((item: ISourceGroup, i: number) => `${i}-${item.Id}`, []);
  const [searchText, setSearchText] = useState('');

  const formApi = useFormContext<IFilterCreate>();
  const values = formApi.getValues('sites');

  const parent = parentsLook(items);
  const [selectedValues, setSelectedValues] = useState<number[]>(values || []);
  // const [selectedParents, setSelectedParents] = useState(findAllSelectedParent(items, selectedValues));
  const [selectedParents, setSelectedParents] = useState(parent.selected(items, selectedValues).get());

  // const [currentPickedValues, setCurrentPickedValue] = useState();

  const toggleSelectedValue = (id: number) => {
    try {
      const isSelected = selectedValues.includes(id);
      const parentOfThisChildren = findParentByChildren(items, id);

      if (!selectedParents || !parentOfThisChildren) throw 'Error no parent of this children';

      if (!isSelected) setSelectedValues([...selectedValues, id]);
      else setSelectedValues(selectedValues.filter(a => a !== id));
    } catch (e) {
      Inform.error(e);
    }
  };

  const onParentPress = (parentId: number) => {
    try {
      const parent = items.find(item => item.Id === parentId);
      if (!parent) throw 'No parent to press (useTreeModalCheckbox)';
      const parentChildrenIds = parent.Sources.map(s => s.Id);
      const isSelected = selectedParents.map(par => par.Id).includes(parent.Id);
      if (!isSelected) {
        const newSelectedValues = addUniqueValues(selectedValues, parentChildrenIds);
        setSelectedValues(newSelectedValues);
        setSelectedParents([...selectedParents, parent]);
      } else {
        const newSelectedValues = removeMatchingValues(selectedValues, parentChildrenIds);
        setSelectedValues(newSelectedValues);

        setSelectedParents(selectedParents.filter(p => p.Id !== parentId));
      }
    } catch (e) {
      Inform.error(e);
    }
  };

  const filterBySearch = () => {
    const lowercasedSearch = searchText.toLowerCase();
    const filtered = items.filter(
      group =>
        group.Name.toLowerCase().includes(lowercasedSearch) ||
        group.Sources.some(source => source.Name.toLowerCase().includes(lowercasedSearch)),
    );

    return filtered;
  };

  const getCheckType = (parentId: number): CheckboxCustom['type'] => {
    const parent = items.find(item => item.Id === parentId);

    const allParentsIdsNow = findAllSelectedChildrenByParent(parent?.Sources.map(s => s.Id) || [], selectedValues);

    return allParentsIdsNow.length === parent?.Sources.length ? 'check' : 'partial';
  };

  const pressAcceptButton = () => {
    formApi.setValue('sites', selectedValues);
  };

  const reset = () => {
    setSelectedValues(values || []);
    const parentsUnselected = parentsLook(selectedParents)
      .unSelected(selectedParents, values || [])
      .get();

    setSelectedParents(selectedParents.filter(sP => !parentsUnselected.map(a => a.Id).includes(sP.Id)));
  };

  useEffect(() => {
    const newSelectedParent = parentsLook(items).selected(items, selectedValues).get();
    setSelectedParents(newSelectedParent);
  }, [items, selectedValues]);

  // useEffect(() => {
  //   const a = selectedValues.filter(sV => selectedParents.some(sP => sP.Sources.some(s => s.Id === sV)));

  //   setSelectedValues(a);
  // }, [selectedParents]);

  return {
    selectedValues,
    selectedParents,
    searchText,
    setSearchText,
    filterBySearch,
    toggleSelectedValue,
    pressAcceptButton,
    keyExtractor,
    onParentPress,
    getCheckType,
    reset,
  };
};

const findParentByChildren = (items: ISourceGroup[], childrenId: number) => {
  return items.find(item => item.Sources.some(source => source.Id === childrenId));
};

const findAllSelectedChildrenByParent = (parentSourcesIds: number[], selectedValues: number[]): number[] => {
  return selectedValues.filter(sV => parentSourcesIds.includes(sV));
};

// Chat GPT
const findAllSelectedParent = (items: ISourceGroup[], selectedValues: number[]): ISourceGroup[] => {
  return items.filter(group => group.Sources.some(source => selectedValues.includes(source.Id)));
};

function parentsLook(items: ISourceGroup[]) {
  let i = items;
  return {
    selected: function (items: ISourceGroup[], selectedValues: number[]) {
      i = items.filter(group => group.Sources.some(source => selectedValues.includes(source.Id)));
      return this;
    },
    unSelected: function (items: ISourceGroup[], selectedValues: number[]) {
      i = items.filter(group => !group.Sources.some(source => selectedValues.includes(source.Id)));
      return this;
    },
    get: function () {
      return i;
    },
  };
}
