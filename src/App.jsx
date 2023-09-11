import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './components/Pages/Home'
import Catalog from './components/Pages/Catalog'
import About from './components/Pages/About'

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


