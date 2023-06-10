import { rootApi } from '../api';
import { Gender } from '@/types/gender.type';

const homeApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getGenders: build.query<Gender[], string>({
      query: () => ({ url: '/home', method: 'get' }),
    }),
  }),
});

export const { useGetGendersQuery } = homeApi;
