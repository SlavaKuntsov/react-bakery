import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

import 'src/App.scss'

import Nav from '../Nav/Nav'
import Loader from 'components/Loader'

const Cart = lazy(() => import('components/Cart/Cart'))


export default function Layout() {
	return (
		<div className='layout bg-white w-full h-full '>
			<header>
				<Nav />
				<Suspense fallback={<></>}>
					<Cart/>
				</Suspense>
			</header>
			<main className='w-full h-[3000px] flex flex-col items-center overflow-hidden gap-12 relative'>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
			<footer></footer>
		</div>
	)
}