import { ShoppingCartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import Title from 'components/Typography/Title'

import cartAction from 'store/actions/cart.action'
import AddingCountButton from 'components/Buttons/AddingCountButton'
import { useEffect, useState } from 'react'

import bin from 'assets/icons/bin.svg'

export default function Cart() {
	const cart = useSelector(state => state.cart)
	const { isCartOpen, products } = cart

	const dispatch = useDispatch()

	const [count, setCount] = useState(1)
	const [id, setId] = useState()
	useEffect(() => {
		dispatch(cartAction.changeCount({
			id: id,
			count: count
		}))
	}, [count])

	return (
		<>
			<Drawer
				placement='right'
				onClose={() => dispatch(cartAction.toggleCart())}
				open={isCartOpen}
				title={
					<Title isMenuTitle={true}>
						Ваша корзина ({products.length}):
					</Title>
				}
			>
				<h2 className='text-2xl font-bold'></h2>
				<div className="flex flex-col gap-10 justify-between">
					{products.length > 0 ? products.map((item, id) => {
						return (
							<div
								key={id}
								className='flex flex-row justify-between gap-6 items-center'
							>
								<div
									className='h-28 w-32 bg-cover bg-no-repeat bg-center rounded-2xl'
									style={{
										backgroundImage: `url("../../src/assets/${item.type}/${item.path}.jpg")`
									}}
									alt='catalog'
								></div>
								<div className='info w-full flex flex-col gap-2'>
									<h5 className='text-brown font-medium'>{item.secondname}</h5>
									<div className="flex flex-row justify-between items-center">
										<p>{item.price} * {item.count}</p>
						
										<AddingCountButton cart={true} getCount={c => {setCount(c); setId(item.id)}} />

										<img onClick={() => dispatch(cartAction.addToCart({id: item.id}))} src={bin} alt="bin" />
									</div>
								</div>
							</div>
						)
					})
				:
				<h2>Корзина пуста</h2>
					}
				</div>
			</Drawer>
			<div
				className='absolute flex sm:hidden right-4 bottom-4 rounded-full w-14 h-14 bg-blue-400 items-center justify-center z-50 cursor-pointer'
				onClick={() => {
					dispatch(cartAction.toggleCart())
				}}
			>
				<ShoppingCartOutlined
					style={{ fontSize: '16px', color: 'white' }}
				/>
				<span className='count absolute w-6 h-6 rounded-full bg-blue-200 text-md right-0 bottom-0 flex items-center justify-center'>
					{products.length}
				</span>
			</div>
		</>
	)
}
