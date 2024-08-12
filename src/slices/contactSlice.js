import { apiSlice } from './apiSlice';
const base_url = import.meta.env.VITE_API_BASE_URL;
export const contactSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: `${base_url}contact/createcontact `,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateContactMutation } = contactSlice;
