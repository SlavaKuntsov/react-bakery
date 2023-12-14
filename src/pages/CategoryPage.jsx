import { Breadcrumb } from 'antd'
import { lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import productAction from 'store/actions/products.action'

const CatalogGrid = lazy(() => import('components/Catalog/CatalogGrid'))

import CatalogItem from 'components/Catalog/CatalogItem'
import SectionTitle from 'components/Typography/SectionTitle'

export default function CategoryPage() {
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const [array, setArray] = useState([])
	const [catalogType, setCatalogType] = useState()

	const products = useSelector(state => state.products)

	useEffect(() => {
		if (pathname.includes('bread')) {
			setCatalogType('bread')
			dispatch(productAction.fetchData('bread'))
		}
		if (pathname.includes('cake')) {
			setCatalogType('cake')
			dispatch(productAction.fetchData('cake'))
		}
		if (pathname.includes('dough')) {
			setCatalogType('dough')
			dispatch(productAction.fetchData('dough'))
		}
	}, [pathname, dispatch])

	useEffect(() => {
		if (pathname.includes('bread')) {
			setArray(products.bread)
		}
		if (pathname.includes('cake')) {
			setArray(products.cake)
		}
		if (pathname.includes('dough')) {
			setArray(products.dough)
		}
	}, [products])

	return (
		<div className='category w-full flex flex-col gap-12 px-8 sm:px-16 md:px-20'>
			{catalogType === 'bread' && (
				<>
					<SectionTitle>Хлеб</SectionTitle>
					<Breadcrumb
						separator='>'
						items={[
							{
								title: 'Каталог',
								href: '/catalog'
							},
							{
								title: 'Хлеб'
							}
						]}
					/>
				</>
			)}
			{catalogType === 'cake' && (
				<>
					<SectionTitle>Торты и пирожные замороженные</SectionTitle>
					<Breadcrumb
						separator='>'
						items={[
							{
								title: 'Каталог',
								href: '/catalog'
							},
							{
								title: 'Торты и пирожные замороженные'
							}
						]}
					/>
				</>
			)}
			{catalogType === 'dough' && (
				<>
					<SectionTitle>Торты и пирожные замороженные</SectionTitle>
					<Breadcrumb
						separator='>'
						items={[
							{
								title: 'Каталог',
								href: '/catalog'
							},
							{
								title: 'Тестовые заготовки замороженные'
							}
						]}
					/>
				</>
			)}
			<CatalogGrid array={array}>
				{array.map((item, id) => {
					return <CatalogItem link={catalogType} {...item} key={id} />
				})}
			</CatalogGrid>
		</div>
	)
}
