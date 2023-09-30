import StartBlock from './StartBlock'
import Carousel from "../Carousel/Carousel"


export default function Main() {
	const allCakes = [
		'../../../src/assets/cakes/honey cake/1579904333_7-p-torti-medovik-13.jpg',
		'../../../src/assets/cakes/honey cake/1680502509_3-95.jpg',
		'../../../src/assets/cakes/honey cake/1579904333_7-p-torti-medovik-13.jpg',
		'../../../src/assets/cakes/honey cake/1579904333_7-p-torti-medovik-13.jpg',
		'../../../src/assets/cakes/honey cake/288e6160f1f8aa7d06a3a1abe095ff23.jpeg',
		'../../../src/assets/cakes/honey cake/1680502509_3-95.jpg',
		'../../../src/assets/cakes/honey cake/288e6160f1f8aa7d06a3a1abe095ff23.jpeg',
		'../../../src/assets/cakes/honey cake/1680502509_3-95.jpg',
		'../../../src/assets/cakes/honey cake/288e6160f1f8aa7d06a3a1abe095ff23.jpeg',
	]
	return (
		<div className='w-full h-auto overflow-hidden'>
			<div className='gradient w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] opacity-90 bg-[#FBEDCD] blur-[240px] rounded-full absolute top-0 sm:-right-20 lg:-right-[200px]'></div>
			<StartBlock />
			{/* <Carousel imageArray={allCakes}/> */}

		</div>
	)
}
