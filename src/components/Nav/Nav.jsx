import { Link } from 'react-router-dom'

export default function Nav () {
	
	return (
		<nav className='flex flex-row justify-between items-center w-full md:px-40 py-6 bg-white'>

			<h2 className='text-2xl xl:text-4xl font-semibold inline md:block text-center w-full md:w-auto'>Белорусский вкус</h2>
			
			<ul className='md:flex hidden flex-row gap-20 text-2xl'>
				<li><Link to='/'>Главная</Link></li>
				<li><Link to='catalog'>Каталог</Link></li>
				<li><Link to='about'>О нас</Link></li>
			</ul>
		</nav>
	)
}

