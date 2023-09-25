import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productAction from '../../store/actions/products.action'

import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import Main from "../Main/Main";


export default function Home () {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(productAction.fetchData())
	}, [])

	return (
		<div className='w-full h-full flex flex-col items-center '>
			<Nav/>
			<Cart/>
			<Main/>
			<div
				onClick={() => {
					dispatch(productAction.fetchData())
				}}
			>get all</div>


			
			
			{/* <button 
				onClick={() => {
					dispatch(CartAction.addToCart({id: 1}))
				}}
				className="p-2 bg-gray-50"
			>add to cart</button>
			<button 
				onClick={() => {
					dispatch(CartAction.addToCart({id: 2}))
				}}
				className="p-2 bg-gray-50"
			>add to cart</button>
			<button 
				onClick={() => {
					dispatch(CartAction.addToCart({id: 3}))
				}}
				className="p-2 bg-gray-50"
			>add to cart</button> */}

		</div>
	);
}

