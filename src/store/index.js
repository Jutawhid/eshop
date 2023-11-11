import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
	persistReducer,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	FLUSH,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice';
import authReducer from './auth/authSlice';
import productReducer from './products/productSlice';

const reducers = combineReducers({
	modal: modalReducer,
	cart: cartReducer,
	auth: authReducer,
	products: productReducer,
});
const PersistConfig = {
	key: 'root',
	storage,
	version: 1,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(PersistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
