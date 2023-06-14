import { rootApi } from '../api';

const authApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<
      null,
      { phone: string; first_name: string; last_name: string }
    >({
      query: (payload) => ({
        url: '/otp/register',
        method: 'POST',
        body: payload,
      }),
    }),
    login: build.mutation<null, { phone: string }>({
      query: (payload) => ({
        url: '/otp/login',
        method: 'POST',
        body: payload,
      }),
    }),
    confirm: build.mutation<null, { phone: string; code: number }>({
      query: (payload) => ({
        url: '/otp/confirm',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useConfirmMutation } =
  authApi;
