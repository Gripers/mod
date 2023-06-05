import { rootApi } from '../api';
import { Gender } from '@/types/gender.type';

const homeApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getGenders: build.query<Gender[], string>({
      query: () => '/home',
    }),
  }),
});

export const { useGetGendersQuery } = homeApi;
