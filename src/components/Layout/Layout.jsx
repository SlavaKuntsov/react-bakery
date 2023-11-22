import { Suspense, lazy, useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import 'src/App.scss'

import Loader from 'components/Loader'
import ScrollToTop from 'components/ScrollToTop'
import Nav from '../Nav/Nav'

const Cart = lazy(() => import('components/Cart/Cart'))

export default function Layout() {

	const { pathname } = useLocation()

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
		console.log('ScrollToTop')
	}, [pathname])

	return (
		<>
			{/* <ScrollToTop /> */}
			<div className='layout bg-white w-full h-full '>
				<header>
					<Nav />
					<Suspense fallback={<></>}>
						<Cart />
					</Suspense>
				</header>
				<main className='w-full h-[3000px] flex flex-col items-center overflow-hidden gap-12 relative'>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</main>
				<footer></footer>
			</div>
		</>
	)
}
