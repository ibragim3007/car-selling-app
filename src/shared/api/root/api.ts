import { API_URL } from '@/shared/config/config';
import Storage from '@/shared/constants/storage/Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  headers: { 'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9' },

  prepareHeaders: async headers => {
    const token = await AsyncStorage.getItem(Storage.auth_token);

    headers.set('X-Device-OS', Platform.OS);
    headers.set('X-User-Token', token || '');

    return headers;
  },
});

export const rootApi = createApi({
  reducerPath: 'apiRoot',
  tagTypes: ['Filters'],
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
