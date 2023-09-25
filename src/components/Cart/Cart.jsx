import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ShoppingCartOutlined } from '@ant-design/icons'
import { CloseIcon } from '@chakra-ui/icons'
import { Drawer } from 'antd'

import CartAction from '../../store/actions/cart.action'
import classNames from 'classnames'

export default function Cart() {
	const isCartOpen = useSelector(state => state.cart.isCartOpen)
	console.log('isCartOpen: ', isCartOpen);
	const products = useSelector(state => state.cart.products)
	console.log('products: ', products);

	const dispatch = useDispatch()

	// const [openDrawer, setOpenDrawer] = useState(false)
	// const showDrawer = () => {
	// 	setOpenDrawer(true)
	// }
	// const closeDrawer = () => {
	// 	setOpenDrawer(false)
	// }

	return (
		<>
			<div>
				{/* <div 
					className={
						classNames(
							'h-full transition-opacity duration-400 absolute top-0 left-0 bg-black',
							{'opacity-0 translate-x-full w-0' : !isCartOpen},
							{'opacity-50 translate-x-0 z-20 w-full' : isCartOpen}
						)
					}
				>
				</div> */}
				{/* <div className={
					classNames(
						'absolute w-full sm:w-[378px] md:w-[500px] bg-white h-full top-0 right-0 transition-transform ease-out duration-300 px-10 py-4 lg:py-6 z-50',
						{'translate-x-full sm:translate-x-[378px] md:translate-x-[500px]' : !isCartOpen},
						{'translate-x-0' : isCartOpen}
					)
				}>
					<div className='w-full h-10 flex flex-row justify-between z-50'>
						<h2 className='text-xl md:text-3xl'>Ваша корзина</h2>
						<div 
							onClick={() => dispatch(CartAction.toggleCart())}	
						>
							<CloseIcon boxSize={12} color='gray'/>
						</div>
					</div>
				</div> */}
				<Drawer 
					placement='right' 
					width={500}

					onClose={() => dispatch(CartAction.toggleCart())} 
					open={isCartOpen}

					title={`  Ваша корзина (${products.length}):`}
				>
					<h2 className='text-2xl font-bold'></h2>
					
				</Drawer>
			</div>
			<div 
					className='absolute flex md:hidden right-4 bottom-4 rounded-full w-16 h-16 bg-blue-400 items-center justify-center z-50'
					// onClick={showDrawer}
					onClick={() => dispatch(CartAction.toggleCart())}
				>
					<ShoppingCartOutlined 
						style={{ fontSize: '20px', color: 'white'}}
					/>
					<span className="count absolute w-6 h-6 rounded-full bg-blue-200 text-lg right-0 bottom-0 flex items-center justify-center">
						{products.length}
					</span>
				</div>
		</>
	)
}
