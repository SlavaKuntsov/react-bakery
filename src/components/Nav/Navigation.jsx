import { Link, NavLink, useLocation } from 'react-router-dom';
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

	return(
		<li>
			<NavLink 
				to={to}
				className={
					classNames(
						'text-brown w-full block',
						{'bg-slate-100 rounded-xl': isMenu && location.pathname === to},
						{'text-3xl px-5 py-6': isMenu},
						{'text-lg md:text-xl 2xl:text-2xl': !isMenu},
						{'': isMenu && location.pathname === to},
						{'font-semibold': location.pathname === to},
						{'tracking-tight': !isMenu && to === '/about'},
						{'tracking-wide': !isMenu && location.pathname !== to},
					)
				}
			>
				{children}
			</NavLink>
		</li>
	)
}