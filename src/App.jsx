import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import productAction from 'store/actions/products.action'

import Layout from 'components/Layout/Layout'

const Home = lazy(() => import('pages/Home'))
const Catalog = lazy(() => import('pages/Catalog'))
const About = lazy(() => import('pages/About'))

export default function App() {
	const dispatch = useDispatch()

	// function ErrorBoundary() {
	// 	let error = useRouteError();
	// 	console.error(error);
	// 	// Uncaught ReferenceError: path is not defined
	// 	return <div>Dang!</div>;
	//   }



	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: 'home',
					index: true,
					element: <Home />
				},
				{
					path: 'home/catalog',
					element: <Catalog />
				},
				{
					path: 'home/about',
					element: <About />
				}
			]
		}
	])

	useEffect(() => {
		dispatch(productAction.fetchData())
	}, [])

	return <RouterProvider router={router} />
}
