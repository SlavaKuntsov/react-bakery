import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import 'src/index.css'

import { persistor, store } from 'store/store.js'

import App from 'src/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	// </React.StrictMode>
)
