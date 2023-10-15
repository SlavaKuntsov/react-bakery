import { Suspense, lazy } from 'react'

const Carousel = lazy(() => import('components/Carousel/Carousel'))

import Button from 'components/Buttons/Button'
import LazyImage from 'components/LazyImage'

import { cake, cakeMobileBlur, m1, m2, m3 } from 'utils/assetsImports'


export default function StartBlock() {
	const allCakes = [m1, m2, m1, m2, m3, m3, m1, m2]
	return (
		<div className='relative sm:pb-10 md:p-0 min-h-[1000px] sm:min-h-0'>
			<div
				className='start-block
				flex flex-col sm:flex-row justify-between 
				gap-10 sm:gap-14 md:gap-16 lg:gap-28 xl:gap-32 mx-10 sm:ml-16 md:ml-20'
			>
				<LazyImage
					src={cakeMobileBlur}
					className='mobile-image sm:hidden block
						my-6 sm:-mr-20 md:mr-0 xl:-mt-10
						w-full max-w-lg mx-auto sm:min-w-[350px] sm:max-md:h-[300px] md:min-w-[400px] md:max-lg:h-[340px] lg:min-w-[500px] xl:h-[600px] xl:min-w-[700px] 
						z-10'
				/>
				<div
					className='w-full flex flex-col gap-6 sm:gap-8 
						mt-0 sm:mt-28 md:mt-32 lg:mt-48 
						z-20 sm:z-10'
				>
					{/* hidden h1 */}
					<h1
						className='not-mobile-text hidden sm:block
						text-white sm:text-brown xl:leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold
						max-w-md sm:max-w-none text-center sm:text-start mx-auto mt-4 sm:m-0'
					>
						Подарим вам счастье, с помощью кусочка торта!
					</h1>
					{/*  */}
					<div className='flex flex-col gap-4 sm:gap-2 relative py-6 px-8 sm:p-0 sm:m-0 text-[#FBEDCD]'>
						<div className='absolute top-0 left-0 block sm:hidden w-full h-full bg-brown opacity-95 rounded-xl z-0'></div>
						<h3 className=' sm:text-gray xl:leading-normal text-xl xl:text-2xl z-10 hyphens-auto'>
							Поставка замороженной белорусской выпечки.
						</h3>
						<h3 className=' sm:text-gray xl:leading-normal text-xl xl:text-2xl z-10 hyphens-auto'>
							Разумно распорядимся вашими финансами и временем.
							Ведь наша выпечка будет самой свежей!
						</h3>
					</div>

					<div className='w-full flex flex-row justify-between sm:mt-10 md:m-0'>
						<Button isDark={true} to={'/home'}>
							Заказать
						</Button>
					</div>
				</div>

				<LazyImage
					src={cake}
					className='hidden sm:block -scale-x-[1]
						sm:-mr-20 md:mr-0 xl:-mt-10
						w-11/12 max-w-lg mx-auto sm:min-w-[350px] sm:max-md:h-[300px] md:min-w-[400px] md:max-lg:h-[340px] lg:min-w-[500px] xl:h-[600px] xl:min-w-[700px] 
						z-10'
				/>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Carousel
					imageArray={allCakes}
					className='absolute bottom-0 xl:bottom-10 sm:-right-28 -right-32'
				/>
			</Suspense>
		</div>
	)
}
