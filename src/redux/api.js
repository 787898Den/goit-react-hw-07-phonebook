import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62dc24eb4438813a26121cc7.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;