import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactAction: {
      prepare: contacts => {
        return {
          payload: {
            ...contacts,
            id: nanoid(),
          },
        };
      },
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContactAction: (state, action) => {
      // state.contacts = state.contacts.filter(
      //   contact => contact.id !== action.payload
      // );
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
