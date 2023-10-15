import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'

import { Drawer } from 'antd'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ShoppingCartOutlined } from '@ant-design/icons'

import Navigation from './Navigation'

import CartAction from '../../store/actions/cart.action'

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
		<nav className='sticky top-0 bg-white w-full flex justify-center items-center z-20 border-b-[0.5px] border-[#56B28033]'>
			<div className="max-w-[1600px] flex flex-row justify-between items-center w-full sm:px-16 md:px-20 py-5 sm:py-4 relative">
				<h2 className='text-2xl md:text-3xl 2xl:text-4xl font-semibold inline sm:block text-center w-full sm:w-auto text-brown'>
					Белорусский вкус
				</h2>

				<ul className='hidden sm:flex flex-row gap-12 md:gap-16 lg:gap-24 text-xl lg:text-2xl'>
					<Navigation isMenu={false}/>
				</ul>

				<div 
					className='relative hidden sm:block lg:ml-[130px] xl:ml-[200px]'
					onClick={() => dispatch(CartAction.toggleCart())}
				>
					<ShoppingCartOutlined 
						style={{ fontSize: '20px'}}
					/>
					<span className="count absolute w-6 h-6 bg-slate-200 rounded-full text-lg -right-4 -bottom-2 flex items-center justify-center">
						{products ? products.length : '0'}
					</span>
				</div>

				<div className='absolute sm:hidden right-4'>
					<HamburgerIcon
						boxSize={30}
						onClick={showDrawer}
					/>
				</div>

				<Drawer 
					title={
						<h2>Навигация</h2>
					}
					placement='right' 
					onClose={closeDrawer} 
					open={openDrawer}
				>
					<ul className='flex flex-col gap-2'>
						<Navigation isMenu={true} isCLoseDrawer={closeDrawer}/>
					</ul>
				</Drawer>
			</div>
		</nav>
	)
}
