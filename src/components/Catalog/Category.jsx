import { lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import SectionTitle from 'components/Typography/SectionTitle'
import productAction from 'store/actions/products.action'

const CatalogGrid = lazy(() => import('components/Catalog/CatalogGrid'))
const CatalogItem = lazy(() => import('components/Catalog/CatalogItem'))

export default function Category({ link, title }) {
	const dispatch = useDispatch()

	const [array, setArray] = useState([])
	const products = useSelector(state => state.products)

	useEffect(() => {
		dispatch(productAction.fetchData(link))
	}, [dispatch, link])

	useEffect(() => {
		if (link === 'bread') {
			setArray(products.bread)
		}
		if (link === 'cake') {
			setArray(products.cake)
		}
		if (link === 'dough') {
			setArray(products.dough)
		}
	}, [products, array, link])

	return (
		<div className='category w-full'>
			<div className='title relative'>
				<SectionTitle>{title}</SectionTitle>
				<Link
					to={`/catalog/${link}`}
					className='absolute sm:right-16 md:right-20 right-1/2 transform translate-x-1/2 sm:-translate-x-0 -bottom-12 sm:top-1 pointer text-lg sm:text-xl underline underline-offset-2'
				>
					Перейти в раздел
				</Link>
			</div>
			<CatalogGrid array={array}>
				{array.map((item, id) => {
					return <CatalogItem link={link} {...item} key={id} />
				})}
			</CatalogGrid>
		</div>
	)
}
