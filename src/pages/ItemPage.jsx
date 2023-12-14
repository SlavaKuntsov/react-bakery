import { Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddingCountButton from 'components/Buttons/AddingCountButton'

import itemAction from 'store/actions/item.action'
import cartAction from 'store/actions/cart.action';
import Loader from 'components/Loader'
import classNames from 'classnames'

export default function ItemPage() {
	const dispatch = useDispatch()

	const item = useSelector(state => state.item)
	const cart = useSelector(state => state.cart.products)
	console.log('cart: ', cart);
	const { id, itemInfo } = item
	const { name, secondname, path, price, description, instock, type } =
		itemInfo

	useEffect(() => {
		dispatch(itemAction.fetchData(item.id))
	}, [])

	const [count, setCount] = useState(1)
	useEffect(() => {
		dispatch(cartAction.changeCount({
			id: id,
			count: count
		}))
	}, [count])

	if (!name && !secondname && !path && !price && !description && !instock && !type) {
		return <Loader /> // Можно использовать компонент заглушку или другое сообщение о загрузке
	}

	return (
		<div className='item w-full flex flex-col gap-12 px-8 sm:px-16 md:px-20 mt-12'>
			{type === 'bread' && (
				<>
					<Breadcrumb
						separator='>'
						items={[
							{
								title: 'Каталог',
								href: '/catalog'
							},
							{
								title: 'Хлеб',
								href: '/catalog/bread'
							},
							{
								title: secondname
							}
						]}
					/>
				</>
			)}
			{type === 'cake' && (
				<>
					<Breadcrumb
						separator='>'
						items={[
							{
								title: 'Каталог',
								href: '/catalog'
							},
							{
								title: 'Торты и пирожные замороженные',
								href: '/catalog/cake'
							},
							{
								title: secondname
							}
						]}
					/>
				</>
			)}
			{type === 'dough' && (
				<>
					<Breadcrumb
						separator='>'
						items={[
							{
								title: 'Каталог',
								href: '/catalog'
							},
							{
								title: 'Тестовые заготовки замороженные',
								href: '/catalog/dough'
							},
							{
								title: secondname
							}
						]}
					/>
				</>
			)}

			<div className='item grid grid-cols-1 md:grid-cols-2 justify-between gap-14 md:gap-20 xl:gap-[100px]'>
				{/* <img className='rounded-3xl' src={`../../src/assets/${type}/${path}.jpg`} alt='item' /> */}
				<div
					className={`bg-cover bg-no-repeat bg-center rounded-3xl h-[400px] p-10`}
					style={{
						backgroundImage: `url("../../src/assets/${type}/${path}.jpg")`
					}}
				></div>
				<div className='info flex flex-col gap-8'>
					<div className='title flex flex-col gap-2'>
						<h1 className='text-brown text-3xl md:text-5xl font-semibold tracking-wide'>
							{secondname}
						</h1>
						<hr />
						<h2 className='text-brown text-2xl md:text-3xl font-normal'>
							{name}
						</h2>
					</div>
					<div className='price flex flex-row gap-4 items-end  underline-offset-4'>
						<h5 className='text-2xl'>Цена:</h5>
						<h5 className='text-3xl text-brown font-semibold underline'>
							{price && price.replace('$', '$ ')}
						</h5>
					</div>
					<p className='text-lg my-4'>{description}</p>

					<div className='adding flex flex-col sm:flex-row gap-6 sm:gap-20 items-start sm:items-center'>
						<AddingCountButton getCount={c => setCount(c)} />
						<h5
							className={
								classNames(
									`px-10 lg:px-16 py-[14px] rounded-3xl text-lg lg:text-xl
									hover:shadow-xl transition-all shadow-none duration-300
									flex items-center justify-center h-full select-none cursor-pointer`,
									{'bg-[#4e2224] hover:bg-[#4a1d1fcf] sm:bg-[#4a1d1fcf] sm:hover:bg-brown text-white active:bg-[#4a1d1fd6]' : !cart.some(item => item.id === id)},
									{'bg-[#9b191f] hover:bg-[#6d1116] sm:bg-[#9b191f] sm:hover:bg-red text-white active:bg-[#81151a]': cart.some(item => item.id === id)}
								)
							}
							onClick={() => {
								dispatch(
									cartAction.addToCart({
										id: id,
										name: name,
										secondname: secondname,
										path: path,
										price: price,
										description: description,
										instock: instock,
										type: type,
										count: count
									})
								)
							}}
						>
							{cart.some(item => item.id === id) ? 'Удалить из корзины' : 'Добавить в корзину'}
							
						</h5>
					</div>
				</div>
			</div>
		</div>
	)
}
