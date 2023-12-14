import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { inStockW } from 'utils/assetsImports'

import { useEffect, useState } from 'react'
import itemAction from 'store/actions/item.action'
import { ShoppingCartOutlined } from '@ant-design/icons'

export default function CatalogItem({
	id,
	secondname,
	path,
	type,
	price,
	instock,
	link
}) {
	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart.products)

	return (
		<Link
			to={`/catalog/${link}/${id}`}
			onClick={() => {
				dispatch(
					itemAction.openItem({
						id: id
					})
				)
			}}
			className='item relative cursor-pointer flex flex-col gap-2 items-center justify-center py-5 px-6 border-brown border-[1.1px] rounded-3xl hover:shadow-lg duration-300 transition-shadow'
		>
			<div
				className='h-[180px] sm:h-[100px] md:h-[160px] lg:h-[170px] w-full bg-cover bg-no-repeat bg-center rounded-2xl'
				style={{
					backgroundImage: `url("../src/assets/${type}/${path}.jpg")`
				}}
			></div>
			<h5 className='text-xl font-semibold mt-2'>{secondname}</h5>
			<span className='underline underline-offset-2 text-xl'>
				{price}
			</span>
			<div className='absolute top-3 right-3 flex flex-col gap-2 items-end'>
				{!instock && (
					<p className='flex flex-row gap-4 text-md font-medium text-white bg-brown bg-opacity-90 px-4 py-[4px] rounded-xl'>
						Нет в наличии <img className='w-5' src={inStockW} alt='' />
					</p>
				)}
				{cart && cart.some(item => item.id === id) && (
					<p className='flex flex-row gap-4 text-md font-base text-white bg-brown bg-opacity-80 px-4 py-[4px] rounded-xl w-fit'>
						В корзине <ShoppingCartOutlined className='w-5'/>
					</p>
				)}
			</div>
		</Link>
	)
}
