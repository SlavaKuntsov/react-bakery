import { Suspense, lazy, useEffect } from 'react'

import PropTypes from 'prop-types'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import 'src/App.scss'

import Nav from '../Nav/Nav'

const Cart = lazy(() => import('components/Cart/Cart'))


export default function Layout() {

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// if(location.pathname === '/') {
		// 	// navigate('/home', { replace: true });
		// }
		// else if(location.hash === '/catalog') {
		// 	navigate('/catalog', { replace: true });
		// }
		// else if(location.hash === '/about') {
		// 	navigate('/about', { replace: true });
		// }
	}, [navigate, location]);

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
