import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import productAction from 'store/actions/products.action';

const Category = lazy(() => import('components/Catalog/Category'))

import { catalogBackground } from "utils/assetsImports";

export default function Catalog () {

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(productAction.fetchData('all'))
	// }, [dispatch])

	return (
		<>
			<div 
				className='h-[300px] md:h-[400px] lg:h-[500px] w-full bg-cover bg-no-repeat bg-left sm:bg-center'
				style={{ backgroundImage: `url("${catalogBackground}")`}} 
			></div>
			<section className="catalogCategories w-full flex flex-col gap-10 items-center justify-center">
				<Category title='Хлеб' link='bread'/>
				<Category title='Торты и пирожные замороженные' link='cake'/>
				<Category title='Тестовые заготовки замороженные' link='dough'/>
			</section>
		</>
	)
}

