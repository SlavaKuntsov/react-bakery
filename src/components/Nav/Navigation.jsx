import classNames from 'classnames'
import { Link } from 'react-router-dom'


export default function Links ({ isMenu }) {
	return (
		<>
			<LinkStyle isMenu={isMenu} to='/'>Главная</LinkStyle>
			<LinkStyle isMenu={isMenu} to='catalog'>Каталог</LinkStyle>
			<LinkStyle isMenu={isMenu} to='about'>О нас</LinkStyle>
		</>
			
	)
}

function LinkStyle({ children, isMenu, to }) {
	return(
		<li
			className={
				classNames(
						{'text-2xl': isMenu},
						{'': !isMenu}
				)
			}
		><Link to={to}>{children}</Link></li>
	)
}