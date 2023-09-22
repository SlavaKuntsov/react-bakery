import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './components/Routing/Home'
import Catalog from './components/Routing/Catalog'
import About from './components/Routing/About'

import Layout from './components/Layout/Layout'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home/>
		},
		{
			path: 'catalog',
			element: <Catalog/>
		},
		{
			path: 'about',
			element: <About/>
		}
	])

	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	) 
}


