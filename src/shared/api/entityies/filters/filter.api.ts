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
      // providesTags: (result, error, arg) =>
      //   result ? [...result.map(({ id }) => ({ type: 'Filters' as const, id })), 'Filters'] : ['Filters'],
      providesTags: ['Filters'],
    }),
    filter: build.query<IEditFilter, string>({
      query: (filterId: string) => {
        return {
          url: `${apiConfig.filter.filters.url}/${filterId}`,
          method: apiConfig.filter.filters.method,
        };
      },
      // providesTags: (result, error, arg) =>
      //   result ? [...result.map(({ id }) => ({ type: 'Filters' as const, id })), 'Filters'] : ['Filters'],
    }),
    deleteFilter: build.mutation<IFilter[], number>({
      query: (filterId: number) => {
        return {
          url: `${apiConfig.filter.delete.url}/${filterId}`,
          method: apiConfig.filter.delete.method,
        };
      },
      invalidatesTags: ['Filters'],
    }),
    createFilter: build.mutation<IFilter, IFilterCreate>({
      query: (filter: IFilterCreate) => ({
        url: apiConfig.filter.create.url,
        method: apiConfig.filter.create.method,
        body: filter,
      }),
      invalidatesTags: ['Filters'],
    }),
    editFilter: build.mutation<IFilter, { id: string; filter: IEditFilter }>({
      query: (body: { id: string; filter: IEditFilter }) => ({
        url: `${apiConfig.filter.edit.url}/${body.id}`,
        method: apiConfig.filter.edit.method,
        body: body.filter,
      }),
      invalidatesTags: ['Filters'],
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
