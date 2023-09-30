import { useDispatch, useSelector } from 'react-redux'

import { ShoppingCartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

import CartAction from '../../store/actions/cart.action'

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
					<h2
						className=''
					>
						Ваша корзина ({products.length}):
					</h2>
				}
			>
				<h2 className='text-2xl font-bold'></h2>
				
			</Drawer>
			<div 
					className='absolute flex md:hidden right-4 bottom-4 rounded-full w-16 h-16 bg-blue-400 items-center justify-center z-50'
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
