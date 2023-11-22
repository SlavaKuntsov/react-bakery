import { Suspense, lazy } from 'react'

const Carousel = lazy(() => import('components/Carousel/Carousel'))

import Button from 'components/Buttons/Button'
import LazyImage from 'components/LazyImage'

import { cake, cakeMobileBlur, m1, m2, m3 } from 'utils/assetsImports'


export default function StartBlock() {
	const allCakes = [m1, m2, m1, m2, m3, m3, m1, m2, m3]
	return (
		<>
			<section className='start-block relative sm:pb-10 md:p-0'>
				<div
					className='start-image
					flex flex-col sm:flex-row justify-between 
					gap-4 sm:gap-14 md:gap-16 lg:gap-28 xl:gap-32 mx-8 sm:ml-16 md:ml-20'
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
						<div className='flex flex-col gap-5 sm:gap-2 py-6 px-6 sm:p-0 sm:m-0 text-center sm:text-start text-white sm:text-gray bg-[#4A1D1FB2] sm:bg-transparent rounded-2xl shadow-2xl sm:shadow-none'>
							<h3 className='xl:leading-normal font-semibold text-xl xl:text-2xl z-10 hyphens-auto'>
								Поставка замороженной белорусской выпечки.
							</h3>
							<h3 className='xl:leading-normal text-lg xl:text-2xl z-10 hyphens-auto'>
								Разумно распорядимся вашими финансами и временем.
								Ведь наша выпечка будет самой свежей!
							</h3>
						</div>

						<div className='w-full flex sm:mt-10 md:m-0'>
							<Button to={'/'} className='ml-auto sm:ml-0'>
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
						laptop={true}
					/>
				</Suspense>
			</section>
			<section className='start-text mx-8 sm:mx-16 md:mx-20 flex flex-col items-center justify-center gap-10'>
				<div className='flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 items-center sm:h-[128px] '>
					<h2 className='font-bold text-3xl text-brown text-center leading-tight z-10'>Попробуйте наше самое популярное</h2>
					<div className='min-w-[128px] sm:w-[128px] h-[1px] bg-brown sm:rotate-90 z-10'></div>
					<p className='xl:leading-normal text-xl xl:text-2xl hyphens-auto px-2 sm:px-0 text-center sm:text-start z-10'>
						Вот наши лучшие творения, которые нравятся всем. Легкость и
						сладость торта заставляют желать еще и еще. Начните с тортов,
						хлеба и других творений.
					</p>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<Carousel
						imageArray={allCakes}
						laptop={false}
					/>
				</Suspense>
			</section>
		</>
	)
}
