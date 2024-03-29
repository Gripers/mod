import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
  reducerPath: "root",
  baseQuery: fetchBaseQuery({ baseUrl: String(process.env.NEXT_PUBLIC_API) }),
  endpoints: () => ({}),
});
