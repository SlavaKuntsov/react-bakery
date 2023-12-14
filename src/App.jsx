import { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from 'components/Layout/Layout'
import Error from 'pages/ErrorPage'

const Home = lazy(() => import('pages/Home'))
const Catalog = lazy(() => import('pages/Catalog'))
const About = lazy(() => import('pages/About'))
const ItemPage = lazy(() => import('pages/ItemPage'))
const CategoryPage = lazy(() => import('pages/CategoryPage'))

export default function App() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/catalog',
					element: <Catalog />
				},
				{
					path: '/catalog/:category',
					element: <CategoryPage />
				},
				{
					path: '/catalog/:category/:itemId',
					element: <ItemPage />
				},
				{
					path: '/about',
					element: <About />
				}
			]
		}
	])


	return <RouterProvider router={router} />
}
