import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import productAction from 'store/actions/products.action'

import Layout from 'components/Layout/Layout'

const Home = lazy(() => import('pages/Home'))
const Catalog = lazy(() => import('pages/Catalog'))
const About = lazy(() => import('pages/About'))
import Error  from 'pages/ErrorPage'
// const Error = lazy(() => import('pages/Error/404'))


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
			errorElement: <Error />,
			children: [
				{
					path: '/',
					index: true,
					element: <Home />
				},
				{
					path: '/catalog',
					element: <Catalog />
				},
				{
					path: '/about',
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
