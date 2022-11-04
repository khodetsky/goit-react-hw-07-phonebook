// import { createSlice } from "@reduxjs/toolkit";

// export const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     reducers: {
//         initialContactsData(state, action) {
//             state.items.push(action.payload);
//         },
//         addContact(state, action) {
//             state.items.push(action.payload);
//         },
//         deleteContact(state, action) {
//            const index = state.items.findIndex(contact => contact.id === action.payload);
//            state.items.splice(index, 1);
//         }
//     }
// });

// export const { addContact, deleteContact, initialContactsData } = contactsSlice.actions;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6364178d8a3337d9a2f12a85.mockapi.io' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({

    fetchContacts: builder.query({
        query: () => `/contacts`,
        providesTags: ['Contacts']
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query(newContact) {
        return {
          url: `/contacts`,
          method: 'POST',
          body: newContact,
        }
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactsApi;