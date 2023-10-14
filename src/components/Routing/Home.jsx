import { useDispatch } from 'react-redux'
import { Suspense, lazy } from "react"

import Main from "../Main/Main";

const Cart = lazy(() => import('../Cart/Cart'))

export default function Home () {

	const dispatch = useDispatch()



	return (
		<div className='w-full h-full flex flex-col items-center'>
			<Suspense fallback={<>...</>}>
				<Cart/>
			</Suspense>
			{/* <Suspense fallback={<>...</>}>
				<Main/>
			</Suspense> */}
			<Main/>

			
			
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

