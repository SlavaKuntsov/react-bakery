import { useDispatch, useSelector } from 'react-redux'

import { ShoppingCartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import { FloatButton } from 'antd';


import CartAction from 'store/actions/cart.action'
import Title from 'components/Typography/Title';

export default function Cart() {
	const isCartOpen = useSelector(state => state.cart.isCartOpen)
	const products = useSelector(state => state.cart.products)

	const dispatch = useDispatch()

	return (
		<>
			<Drawer 
				placement='right' 

				onClose={() => dispatch(CartAction.toggleCart())} 
				open={isCartOpen}

				title={
					<h2>
						<Title>Ваша корзина</Title> ({products.length}):
					</h2>
				}
			>
				<h2 className='text-2xl font-bold'></h2>
				
			</Drawer>
			<div 
				className='absolute flex sm:hidden right-4 bottom-4 rounded-full w-14 h-14 bg-blue-400 items-center justify-center z-50'
				onClick={() => {
					dispatch(CartAction.toggleCart())
				}}
			>
				<ShoppingCartOutlined 
					style={{ fontSize: '16px', color: 'white'}}
				/>
				<span className="count absolute w-6 h-6 rounded-full bg-blue-200 text-md right-0 bottom-0 flex items-center justify-center">
					{products.length}
				</span>
			</div>
			{/* <FloatButton 
				onClick={() => {
					dispatch(CartAction.toggleCart())
				}}
				type='primary'
			/> */}
		</>
	)
}
