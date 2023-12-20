import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import contactReducer from './contactsSlice';

const persistConfig = {
  key: 'contact',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const reducer = { contact: persistedReducer };
