import Button from "../Buttons/Button"
import Carousel from "../Carousel/Carousel"

export default function StartBlock() {
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
		<div className='relative'>
			<div className=' flex flex-row justify-between sm:gap-14 md:gap-20 xl:gap-32 mx-10 sm:ml-16 md:ml-20'>
				<div className='w-full flex flex-col gap-8 sm:mt-28 md:mt-32 lg:mt-48 z-10'>
					<h1 className='text-brown xl:leading-tight text-3xl md:text-4xl xl:text-6xl font-bold'>
						Подарим вам счастье, с помощью кусочка торта!
					</h1>
					<div className="flex flex-col gap-2">
						<h3 className='text-gray xl:leading-normal text-xl xl:text-2xl'>
							Поставка замороженной белорусской выпечки
						</h3>
						<h3 className='text-gray xl:leading-normal text-xl xl:text-2xl'>
							Разумно распорядимся вашими финансами и временем. Ведь наша выпечка будет самой свежей!
						</h3>
					</div>
					<div className='w-full flex flex-row justify-between mt-10'>
						<Button isDark={true} to={'/'}>Заказать</Button>
					</div>
				</div>

				<img
					src='../../../src/assets/pngegg.png'
					className='hidden sm:block sm:-mr-20 md:mr-0 sm:min-w-[350px] sm:max-md:h-[300px] md:min-w-[400px] md:max-lg:h-[340px] lg:min-w-[500px] xl:h-[600px] xl:min-w-[700px] z-10 xl:-mt-10'
				/>
			</div>
			<Carousel imageArray={allCakes} className='absolute bottom-10 -right-32'/>
		</div>
	)
}
