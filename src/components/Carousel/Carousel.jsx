import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import classNames from "classnames";

import { LiaLongArrowAltLeftSolid as ArrowL, LiaLongArrowAltRightSolid as ArrowR } from 'react-icons/lia';


export default function Carousel ({ imageArray, className, hiddenOnMobile }) {

	const [translateX, setTranslateX] = useState(0)

	const IMAGE_ARRAY = imageArray

	const MAX_IMAGE_ON_ONE_SLIDE = 3
	const [maxImageOnOneSlide, setMaxImageOnOneSlide] = useState(MAX_IMAGE_ON_ONE_SLIDE)

	const imgWidth = 200;
	const imgWidthOnMobile = 150;
	const [IMG_WIDTH, set_IMG_WIDTH] = useState(imgWidth)

	const size1280px = useMediaQuery({ query: '(min-width: 1280px)' })
	const size1024px = useMediaQuery({ query: '(min-width: 1024px)' })
	const size640pxMin = useMediaQuery({ query: '(min-width: 640px)' })
	const size640pxMax = useMediaQuery({ query: '(max-width: 640px)' })

	// responsive resize
	useEffect(() => {
		switch (true) {
			case size1280px:
				set_IMG_WIDTH(imgWidth)
				break;
			case size1024px:
				set_IMG_WIDTH(imgWidth / 100 * 80)
				break;
			case size640pxMin:
				set_IMG_WIDTH(imgWidth / 100 * 60)
				setMaxImageOnOneSlide(MAX_IMAGE_ON_ONE_SLIDE)
				break;
			case size640pxMax:
				set_IMG_WIDTH(imgWidthOnMobile)
				setMaxImageOnOneSlide(1)
				setCountOfViewedImages(1)
				SET_GAR_PERCENT(1)
				SET_COUNT_OF_MOVED_IMAGES(1)
				break;
		
			default:
				break;
		}
	}, [size1024px, size1280px, size640pxMax, size640pxMin]);

	// change depending on the quantity MAX_IMG_ON_ONE_SLIDE 
	const [COUNT_OF_MOVED_IMAGES, SET_COUNT_OF_MOVED_IMAGES] = useState(3)
	const COUNT_OF_IMAGES_ON_THE_CAROUSEL = IMAGE_ARRAY.length

	const [countOfViewedImages, setCountOfViewedImages] = useState(maxImageOnOneSlide)
	
	const ONE_SLIDE_WIDTH = maxImageOnOneSlide * IMG_WIDTH; 

	const [GAR_PERCENT, SET_GAR_PERCENT] = useState(5)

	const TOTAL_GAP = (ONE_SLIDE_WIDTH / 100 * GAR_PERCENT) 

	const GAP_BETWEEN_IMAGES = 
		maxImageOnOneSlide === 1 
		? 0 
		: (TOTAL_GAP / (maxImageOnOneSlide - 1)) 

	const RESULT_IMAGE_WIDTH = 
		maxImageOnOneSlide === 1
		? IMG_WIDTH
		: ((ONE_SLIDE_WIDTH - TOTAL_GAP) / maxImageOnOneSlide)

	const TRANSLATE_X_ONE_IMAGE = RESULT_IMAGE_WIDTH + GAP_BETWEEN_IMAGES
	const TRANSLATE_X_WIDTH = TRANSLATE_X_ONE_IMAGE * COUNT_OF_MOVED_IMAGES
	
	return (
		<div className={
			classNames(
				`carousel w-fit flex-row lg:px-12 items-center ${className}`,
				{'hidden sm:flex py-6 px-10 gap-10' : hiddenOnMobile === true},
				{'flex sm:hidden gap-5 bg-[#4A1D1FB2] justify-center rounded-[30px] p-[20px]' : hiddenOnMobile === false},
			)
		}>
			<div className='absolute top-0 left-0 sm:w-full sm:h-full bg-white opacity-70 z-10 rounded-[90px]'></div>

			<div className='flex flex-row gap-2 z-20 items-center justify-center'>
				<div
					onClick={() => {
						translateX > 0 
							? (
							setTranslateX(p => p -= TRANSLATE_X_WIDTH), 
							setCountOfViewedImages(p => p -= COUNT_OF_MOVED_IMAGES)
							)
							: null
					}}
				>
					{size640pxMax 
						? <ArrowL size={'2rem'} color="white"/>
						: <ArrowL size={'2rem'}/>
					}
				</div>
				<div className='min-w-[30px] text-center flex flex-row items-start select-none text-white sm:text-black'>
					<span className='text-2xl font-semibold'>{countOfViewedImages}</span>
					<span className='text-2xl'>/</span>
					<span className='text-lg'>{COUNT_OF_IMAGES_ON_THE_CAROUSEL}</span>
				</div>
				<div
					onClick={() => {
						translateX < (TRANSLATE_X_ONE_IMAGE * (COUNT_OF_IMAGES_ON_THE_CAROUSEL - maxImageOnOneSlide)) 
							? (
								setTranslateX(p => p += TRANSLATE_X_WIDTH), 
								setCountOfViewedImages(p => p += COUNT_OF_MOVED_IMAGES)
							)
							: null
					}}
				>
					{size640pxMax 
						? <ArrowR size={'2rem'} color="white"/>
						: <ArrowR size={'2rem'}/>
					}
				</div>
			</div>

			<div 
				className={`overflow-hidden z-20 sm:mr-4`}
				style={{ width: `${ONE_SLIDE_WIDTH}px`}}
			>
				<div 
					className={`flex flex-row items-center justify-start transition-transform duration-300`}
					style={{ transform: `translateX(-${translateX}px)`, gap: `${GAP_BETWEEN_IMAGES}px`}}
				>
					{IMAGE_ARRAY.map((item, id) => {
						return <div 
							className={`bg-cover bg-no-repeat bg-center rounded-2xl `} 
							style={{ backgroundImage: `url("${item}")`, minWidth: IMG_WIDTH === imgWidthOnMobile ? `${100}%` : `${IMG_WIDTH}px`, height: `${IMG_WIDTH / 1.8}px`}} 
							key={id}
						></div>
					})}
				</div>
				
			</div>
		</div>
	)
}