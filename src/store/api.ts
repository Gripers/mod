import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

import type { AxiosRequestConfig, AxiosError } from 'axios';

const customBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const rootApi = createApi({
  reducerPath: 'root',
  baseQuery: customBaseQuery({ baseUrl: String(process.env.NEXT_PUBLIC_API) }),
  endpoints: () => ({}),
});
