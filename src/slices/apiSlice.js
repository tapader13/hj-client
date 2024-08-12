import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Replace this with your actual API base URL
// const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '', // Use your actual base URL
    credentials: 'include', // Include credentials (cookies) in requests
  }),
  endpoints: (builder) => ({
    // Define your endpoints here
  }),
});

export default apiSlice;
