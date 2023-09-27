import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import productAction from '../src/store/actions/products.action'

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


	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(productAction.fetchData())
	}, [])

	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	) 
}


