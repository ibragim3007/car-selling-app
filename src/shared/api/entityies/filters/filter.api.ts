import { rootApi } from '../../root/api';

import apiConfig from '@/shared/config/apiConfig';
import { IEditFilter, IFilter, IFilterCreate } from '@/shared/types/filters.types';

export const filterApi = rootApi.injectEndpoints({
  endpoints: build => ({
    filters: build.query<IFilter[], void>({
      query: () => {
        return {
          url: apiConfig.filter.filters.url,
          method: apiConfig.filter.filters.method,
        };
      },
      providesTags: ['Filter'],
    }),
    filter: build.query<IFilter, string>({
      query: (filterId: string) => {
        return {
          url: `${apiConfig.filter.filters.url}/${filterId}`,
          method: apiConfig.filter.filters.method,
        };
      },
      providesTags: ['Filter'],
    }),
    deleteFilter: build.mutation<void, number>({
      query: (filterId: number) => {
        return {
          url: `${apiConfig.filter.delete.url}/${filterId}`,
          method: apiConfig.filter.delete.method,
        };
      },
      invalidatesTags: ['Filter'],
    }),
    createFilter: build.mutation<IFilter, IFilterCreate>({
      query: (filter: IFilterCreate) => ({
        url: apiConfig.filter.create.url,
        method: apiConfig.filter.create.method,
        body: filter,
      }),
      invalidatesTags: ['Filter'],
    }),
    editFilter: build.mutation<IFilter, { id: string; filter: IEditFilter }>({
      query: (body: { id: string; filter: IEditFilter }) => ({
        url: `${apiConfig.filter.edit.url}/${body.id}`,
        method: apiConfig.filter.edit.method,
        body: body.filter,
      }),
      async onQueryStarted({ id, filter: newFilter }, { dispatch, queryFulfilled }) {
        // Предварительное обновление кэша
        const patchResult = dispatch(
          filterApi.util.updateQueryData('filters', undefined, draft => {
            const filterToUpdate = draft.find(f => f.id === parseInt(id));
            if (filterToUpdate) {
              Object.assign(filterToUpdate, newFilter);
            }
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo(); // Откатываем изменения в случае ошибки
        }
      },
      invalidatesTags: result => [
        {
          type: 'Filter',
          id: result?.id,
        },
      ],
    }),
  }),
});

export const {
  useFiltersQuery,
  useDeleteFilterMutation,
  useFilterQuery,
  useCreateFilterMutation,
  useEditFilterMutation,
} = filterApi;
