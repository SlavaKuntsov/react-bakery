import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import Main from "../Main/Main";

export default function Home () {
	return (
		<div className='w-full h-full flex flex-col items-center '>
			<Nav/>
			<Cart/>
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

