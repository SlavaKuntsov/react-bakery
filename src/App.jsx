import { Suspense, lazy, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import productAction from '../src/store/actions/products.action'

// import Home from './components/Routing/Home'
// import Catalog from './components/Routing/Catalog'
// import About from './components/Routing/About'

import Layout from './components/Layout/Layout'

const Home = lazy(() => import('./components/Routing/Home')) 
const Catalog = lazy(() => import('./components/Routing/Catalog')) 
const About = lazy(() => import('./components/Routing/About')) 

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: 'home',
					element: <Home/>
				},
				{
					path: 'home/catalog',
					element: <Catalog/>
				},
				{
					path: 'home/about',
					element: <About/>
				}
			]
		}
	])


	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(productAction.fetchData())
	}, [])

	return (
		<RouterProvider router={router} />
	) 
}


