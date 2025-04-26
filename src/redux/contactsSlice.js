import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Deni St', number: '048-14-88' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-5', name: 'John Doe', number: '123-45-67' },
    { id: 'id-6', name: 'Jane Smith', number: '987-65-43' },
    { id: 'id-7', name: 'Alice Johnson', number: '555-12-34' },
    { id: 'id-8', name: 'Ontin Herman', number: '680-07-41' },
  ],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
