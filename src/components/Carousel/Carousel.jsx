import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import {
	useWindowWidth
  } from '@react-hook/window-size/throttled'

import { LiaLongArrowAltLeftSolid as ArrowL, LiaLongArrowAltRightSolid as ArrowR } from 'react-icons/lia';
import classNames from "classnames";


export default function Carousel ({ imageArray, className, laptop }) {

	const windowWidth = useWindowWidth()

	const [translateX, setTranslateX] = useState(0)

	const IMAGE_ARRAY = imageArray

	const [MAX_IMAGE_ON_ONE_SLIDE, setMaxImageOnOneSlide] = useState(3) // !
	// console.log('MAX_IMAGE_ON_ONE_SLIDE: ', MAX_IMAGE_ON_ONE_SLIDE);
	const imgWidth = 200;
	const [IMG_WIDTH, set_IMG_WIDTH] = useState(imgWidth)

	const size1280px = useMediaQuery({ query: '(min-width: 1280px)' })
	const size1024px = useMediaQuery({ query: '(min-width: 1024px)' })
	const size640pxMin = useMediaQuery({ query: '(min-width: 640px)' })
	const size400pxMin = useMediaQuery({ query: '(min-width: 400px)' })
	const size400pxMax = useMediaQuery({ query: '(max-width: 400px)' })

	// responsive resize
	useEffect(() => {
		switch (true) {
			case size1280px:
				set_IMG_WIDTH(imgWidth)
				setCountOfMovedImages(3)
				setMaxImageOnOneSlide(3)
				setCountOfViewedImages(MAX_IMAGE_ON_ONE_SLIDE)
				break;
			case size1024px:
				set_IMG_WIDTH(imgWidth / 100 * 80)
				setCountOfMovedImages(3)
				setMaxImageOnOneSlide(3)
				setCountOfViewedImages(MAX_IMAGE_ON_ONE_SLIDE)
				break;
			case size640pxMin:
				set_IMG_WIDTH(imgWidth / 100 * 60)
				setCountOfMovedImages(3)
				setMaxImageOnOneSlide(3)
				setCountOfViewedImages(MAX_IMAGE_ON_ONE_SLIDE)
				break;
			case size400pxMin:
				set_IMG_WIDTH(windowWidth / 100 * 40)
				setCountOfMovedImages(2)
				setMaxImageOnOneSlide(2)
				setCountOfViewedImages(2)
				break;
			case size400pxMax:
				set_IMG_WIDTH(windowWidth / 100 * 80)
				setCountOfMovedImages(1)
				setMaxImageOnOneSlide(1)
				setCountOfViewedImages(1)
				break;
		
			default:
				break;
		}
	}, [MAX_IMAGE_ON_ONE_SLIDE, size1024px, size1280px, size400pxMax, size400pxMin, size640pxMin, windowWidth]);

	// change depending on the quantity MAX_IMG_ON_ONE_SLIDE 
	const [COUNT_OF_MOVED_IMAGES, setCountOfMovedImages] = useState(3)
	const COUNT_OF_IMAGES_ON_THE_CAROUSEL = IMAGE_ARRAY.length

	const [countOfViewedImages, setCountOfViewedImages] = useState(MAX_IMAGE_ON_ONE_SLIDE)
	// console.log('countOfViewedImages: ', countOfViewedImages);
	
	const ONE_SLIDE_WIDTH = MAX_IMAGE_ON_ONE_SLIDE * IMG_WIDTH; 

	const GAR_PERCENT = 5
	const TOTAL_GAP = (ONE_SLIDE_WIDTH / 100 * GAR_PERCENT) 

	const GAP_BETWEEN_IMAGES = 
		MAX_IMAGE_ON_ONE_SLIDE === 1 
		? 0 
		: (TOTAL_GAP / (MAX_IMAGE_ON_ONE_SLIDE - 1)) 

	const RESULT_IMAGE_WIDTH = 
		MAX_IMAGE_ON_ONE_SLIDE === 1
		? IMG_WIDTH
		: ((ONE_SLIDE_WIDTH - TOTAL_GAP) / MAX_IMAGE_ON_ONE_SLIDE)

	const TRANSLATE_X_ONE_IMAGE = RESULT_IMAGE_WIDTH + GAP_BETWEEN_IMAGES
	const TRANSLATE_X_WIDTH = TRANSLATE_X_ONE_IMAGE * COUNT_OF_MOVED_IMAGES
	
	return (
		<>
			{laptop 
				?
				<div className={`carousel hidden sm:flex w-fit flex-row py-6 px-10 lg:px-12 gap-10 items-center ${className}`}>
					<div className='absolute top-0 left-0 sm:w-full sm:h-full bg-white opacity-70 z-10 rounded-[90px]'></div>

					<div className='flex flex-row gap-2 z-20 items-center justify-center'>
						<ArrowL 
							className='cursor-pointer'
							size={'2rem'}
							onClick={() => {
								translateX > 0 
									? (
										setTranslateX(p => p -= TRANSLATE_X_WIDTH), 
										setCountOfViewedImages(p => p -= COUNT_OF_MOVED_IMAGES)
									)
									: null
							}}
						/>
						<div className='min-w-[30px] text-center flex flex-row items-start select-none'>
							<span className='text-2xl font-semibold'>{countOfViewedImages}</span>
							<span className='text-2xl'>/</span>
							<span className='text-lg'>{COUNT_OF_IMAGES_ON_THE_CAROUSEL}</span>
							
						</div>
							
						<ArrowR 
							className='cursor-pointer'
							size={'2rem'} 
							onClick={() => {
								translateX < (TRANSLATE_X_ONE_IMAGE * (COUNT_OF_IMAGES_ON_THE_CAROUSEL - MAX_IMAGE_ON_ONE_SLIDE)) 
									? (
										setTranslateX(p => p += TRANSLATE_X_WIDTH), 
										setCountOfViewedImages(p => p += COUNT_OF_MOVED_IMAGES)
									)
									: null
							}}
						/>
					</div>

					<div 
						className={`overflow-hidden z-20 mr-4`}
						style={{ width: `${ONE_SLIDE_WIDTH}px`}}
					>
						<div 
							className={`flex flex-row items-center justify-start transition-transform duration-300`}
							style={{ transform: `translateX(-${translateX}px)`, gap: `${GAP_BETWEEN_IMAGES}px`}}
						>
							{IMAGE_ARRAY.map((item, id) => {
								return <div 
									className={`bg-cover bg-no-repeat bg-center rounded-2xl `} 
									style={{ backgroundImage: `url("${item}")`, minWidth: `${RESULT_IMAGE_WIDTH}px`, height: `${IMG_WIDTH / 1.8}px`}} 
									key={id}
								></div>
							})}
						</div>
						
					</div>
				</div>
				:
				<div className={`carousel bg-[#4A1D1FB2] rounded-[30px] p-[20px] flex sm:hidden w-full flex-col-reverse gap-10 items-center ${className}`}>
					<div className='flex flex-row gap-2 z-20 items-center justify-center'>
						<div
							onClick={() => {
								countOfViewedImages >= MAX_IMAGE_ON_ONE_SLIDE + 1
									? (
										setTranslateX(p => p -= TRANSLATE_X_WIDTH), 
										setCountOfViewedImages(p => p -= COUNT_OF_MOVED_IMAGES)
									)
									: null
							}}
						>
							{size400pxMin || size400pxMax 
								? <ArrowL className='cursor-pointer' size={'2rem'} color="white"/>
								: <ArrowL className='cursor-pointer' size={'2rem'}/>	
							}
						</div>
						<div className='min-w-[30px] text-center flex flex-row items-start select-none text-white'>
							<span className='text-2xl font-semibold'>
								{
									countOfViewedImages > COUNT_OF_IMAGES_ON_THE_CAROUSEL
										? COUNT_OF_IMAGES_ON_THE_CAROUSEL
										: countOfViewedImages
								}
							</span>
							<span className='text-2xl'>/</span>
							<span className='text-lg'>{COUNT_OF_IMAGES_ON_THE_CAROUSEL}</span>
							
						</div>
						<div
							onClick={() => {
								translateX < (TRANSLATE_X_ONE_IMAGE * (COUNT_OF_IMAGES_ON_THE_CAROUSEL - MAX_IMAGE_ON_ONE_SLIDE)) 
									? (
										setTranslateX(p => p += TRANSLATE_X_WIDTH), 
										setCountOfViewedImages(p => p += COUNT_OF_MOVED_IMAGES)
									)
									: null
							}}
						>
							{size400pxMin || size400pxMax 
								? <ArrowR className='cursor-pointer' size={'2rem'} color="white"/>
								: <ArrowR className='cursor-pointer' size={'2rem'}/>	
							}
						</div>
					</div>
					<div 
						className={`overflow-hidden z-20 h-full bg-transparent w-full rounded-2xl`}
						style={{ width: `${ONE_SLIDE_WIDTH}px`}}
					>
						<div 
							className={`flex flex-row items-center justify-start transition-transform duration-300 w-full h-full`}
							style={{ transform: `translateX(-${translateX}px)`, gap: `${GAP_BETWEEN_IMAGES}px`}}
						>
							{IMAGE_ARRAY.map((item, id) => {
								return <div 
									className={
										classNames(
											'bg-cover bg-no-repeat bg-center rounded-2xl',
											{'h-44': size400pxMin},
											{'h-40': size400pxMax},
										)
									} 
									style={{ backgroundImage: `url("${item}")`, minWidth: `${RESULT_IMAGE_WIDTH}px`}} 
									key={id}
								></div>
							})}
						</div>
						
					</div>
				</div>}
		</>
	)
}