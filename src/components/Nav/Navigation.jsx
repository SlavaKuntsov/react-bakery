import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Links ({ isMenu }) {
	return (
		<>
			<LinkStyle isMenu={isMenu} to='/'>Главная</LinkStyle>
			<LinkStyle isMenu={isMenu} to='/catalog'>Каталог</LinkStyle>
			<LinkStyle isMenu={isMenu} to='/about'>О нас</LinkStyle>
		</>
			
	)
}

function LinkStyle({ children, isMenu, to }) {

	const location = useLocation();
	console.log('location.pathname === to: ', location.pathname === to);
	console.log('to: ', to);
	console.log('location.pathname: ', location.pathname);

	return(
		<li>
			<Link 
				to={to}
				className={
					classNames(
							'text-brown',
							{'text-2xl': isMenu},
							{'text-xl': !isMenu},
							{'font-semibold': location.pathname === to},
							{'font-medium': location.pathname !== to},
					)
				}
			>
				{children}
			</Link>
		</li>
	)
}