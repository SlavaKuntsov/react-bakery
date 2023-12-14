import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ShoppingCartOutlined } from '@ant-design/icons'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer } from 'antd'

import Navigation from 'components/Nav/Navigation'

import Title from 'components/Typography/Title'
import CartAction from 'store/actions/cart.action'

export default function Nav() {
	const dispatch = useDispatch()

	const products = useSelector(state => state.cart.products)

	const [openDrawer, setOpenDrawer] = useState(false)
	const showDrawer = () => {
		setOpenDrawer(true)
	}
	const closeDrawer = () => {
		setOpenDrawer(false)
	}
	return (
		<nav className='fixed top-0 bg-white w-full flex justify-center items-center z-50 border-b-[0.5px] border-[#56B28033]'>
			<div className='max-w-[1600px] flex flex-row justify-between items-center w-full sm:px-16 md:px-20 py-4 relative'>
				{/* было py-5 sm:py-4 */}

				<Title link='/'>Белорусский вкус</Title>

				<ul className='hidden sm:flex flex-row gap-12 md:gap-16 lg:gap-24 text-xl lg:text-2xl'>
					<Navigation isMenu={false} />
				</ul>

				<div
					className='relative hidden sm:block lg:ml-[130px] xl:ml-[200px] cursor-pointer'
					onClick={() => dispatch(CartAction.toggleCart())}
				>
					<ShoppingCartOutlined style={{ fontSize: '20px' }} />
					<span className='count absolute w-6 h-6 bg-slate-200 rounded-full text-lg -right-4 -bottom-2 flex items-center justify-center'>
						{products ? products.length : '0'}
					</span>
				</div>

				<div className='absolute sm:hidden right-4 p-2'>
					<HamburgerIcon
						className='cursor-pointer'
						boxSize={30}
						onClick={showDrawer}
					/>
				</div>

				<Drawer
					title={<Title isMenuTitle={true}>Навигация:</Title>}
					placement='right'
					onClose={closeDrawer}
					open={openDrawer}
				>
					<ul className='flex flex-col gap-2'>
						<Navigation isMenu={true} isCLoseDrawer={closeDrawer} />
					</ul>
				</Drawer>
			</div>
		</nav>
	)
}
