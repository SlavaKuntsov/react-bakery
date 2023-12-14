import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

import 'src/App.scss'

import Loader from 'components/Loader'
import Nav from '../Nav/Nav'
import Footer from 'components/Footer/Footer'

const Cart = lazy(() => import('components/Cart/Cart'))

export default function Layout() {
	
	return (
		<>
			<>
				<header id='nav'>
					<Nav />
					<Suspense fallback={<></>}>
						<Cart />
					</Suspense>
				</header>
				<main className='w-full flex flex-col items-center overflow-hidden gap-12 relative mt-[52px]'>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</main>
				<footer>
				<Suspense fallback={<></>}>
						<Footer />
					</Suspense>
				</footer>
			</>
		</>
	)
}
