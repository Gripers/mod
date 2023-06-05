import {
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API });
// const customBaseQuery: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);

//   return {
//     // @ts-ignore
//     data: result.data?.data,
//     meta: result.meta,
//   };
// };

export const rootApi = createApi({
  reducerPath: 'root',
  // baseQuery: customBaseQuery,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
  endpoints: () => ({}),
});
