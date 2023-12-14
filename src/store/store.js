import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
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
import thunk from 'redux-thunk'

import { cartReducer } from 'store/reducers/cart.reducer'
import { itemReducer } from 'store/reducers/item.reducer'
import { productReducer } from 'store/reducers/product.reducer'

const persistConfig = {
	key: 'root',
	version: 1,
	storage
}

const rootReducer = combineReducers({
	cart: cartReducer,
	products: productReducer,
	item: itemReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const customSerializableCheckOptions = {
	ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
}

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: customSerializableCheckOptions
		}).concat(thunk)
})

export const persistor = persistStore(store)
