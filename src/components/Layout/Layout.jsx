import { Suspense, lazy, useEffect } from 'react'

import PropTypes from 'prop-types'
import { Outlet, useNavigate } from 'react-router-dom'

import 'src/App.scss'

import Nav from '../Nav/Nav'

const Cart = lazy(() => import('components/Cart/Cart'))


export default function Layout() {

	const navigate = useNavigate();

	useEffect(() => {
		navigate('/home', { replace: true });
	}, [navigate ])

	return (
		<div className='layout bg-white w-full h-full overflow-x-hidden overflow-y-auto'>
			<header>
				<Nav />
				<Suspense fallback={<></>}>
					<Cart/>
				</Suspense>
			</header>
			<main>
				<Suspense fallback={<p>loading</p>}>
					<Outlet />
				</Suspense>
			</main>
			<footer></footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element
}
