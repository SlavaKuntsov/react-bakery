import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App.jsx'

import { store, persistor } from './store/store.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<App />
			</Provider>
		</PersistGate>
	</React.StrictMode>
)
