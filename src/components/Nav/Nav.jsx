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

	// const [openCart, setOpenCart] = useState(false)
	// const showCart = () => {
	// 	setOpenCart(true)
	// }
	// const closeCart = () => {
	// 	setOpenCart(false)
	// }

	return (
		<nav className='bg-white w-full flex justify-center items-center z-20'>
			<div className="max-w-[1600px] flex flex-row justify-between items-center w-full md:px-20 py-4 relative">
				<h2 className='text-2xl xl:text-4xl font-medium inline md:block text-center w-full md:w-auto text-brown'>
					Белорусский вкус
				</h2>

				<ul className='hidden md:flex flex-row gap-16 lg:gap-24 text-xl lg:text-2xl'>
					<Navigation isMenu={false}/>
				</ul>
				<div className='relative hidden md:block lg:ml-[130px] xl:ml-[200px]'>
					<ShoppingCartOutlined 
						onClick={() => dispatch(CartAction.toggleCart())}
						style={{ fontSize: '20px'}}
					/>
					<span className="count absolute w-6 h-6 bg-slate-200 rounded-full text-lg -right-4 -bottom-2 flex items-center justify-center">
						{products.length}
					</span>
				</div>

				<div className='absolute md:hidden right-4'>
					<HamburgerIcon
						boxSize={34}
						onClick={showDrawer}
					/>
				</div>

				<Drawer 
					placement='right' 
					onClose={closeDrawer} 
					open={openDrawer}
				>
					<ul className='flex flex-col gap-14'>
						<Navigation isMenu={true}/>
					</ul>
				</Drawer>


			</div>
		</nav>
	)
}
