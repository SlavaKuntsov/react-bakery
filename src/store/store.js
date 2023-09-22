import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/cart.reducer'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['products'],
	blacklist: ['isCartOpen']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: () => {
		getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
		applyMiddleware(thunk)
	}
})

export const persistor = persistStore(store)
