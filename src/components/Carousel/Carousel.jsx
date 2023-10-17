import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import { LiaLongArrowAltLeftSolid as ArrowL, LiaLongArrowAltRightSolid as ArrowR } from 'react-icons/lia';


export default function Carousel ({ imageArray, className }) {

	const [translateX, setTranslateX] = useState(0)

	const IMAGE_ARRAY = imageArray

	const MAX_IMAGE_ON_ONE_SLIDE = 3; //!
	const imgWidth = 200;
	const [IMG_WIDTH, set_IMG_WIDTH] = useState(imgWidth)
	console.log('IMG_WIDTH: ', IMG_WIDTH);

	const size1280px = useMediaQuery({ query: '(min-width: 1280px)' })
	const size1024px = useMediaQuery({ query: '(min-width: 1024px)' })
	const size640pxMin = useMediaQuery({ query: '(min-width: 640px)' })
	const size640pxMax = useMediaQuery({ query: '(max-width: 640px)' })

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setWindowWidth(window.innerWidth);
	// 	};
	
	// 	window.addEventListener('resize', handleResize);
	
	// 	return () => {
	// 		window.removeEventListener('resize', handleResize);
	// 	};
	// }, []);

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
				break;
			case size640pxMax:
				set_IMG_WIDTH(imgWidth / 100 * 40)
				break;
		
			default:
				break;
		}
	}, [size1024px, size1280px, size640pxMax, size640pxMin]);

	// change depending on the quantity MAX_IMG_ON_ONE_SLIDE 
	const COUNT_OF_MOVED_IMAGES = 3; //! 
	const COUNT_OF_IMAGES_ON_THE_CAROUSEL = IMAGE_ARRAY.length

	const [countOfViewedImages, setCountOfViewedImages] = useState(MAX_IMAGE_ON_ONE_SLIDE)
	
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

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if(translateX < (TRANSLATE_X_ONE_IMAGE * (COUNT_OF_IMAGES_ON_THE_CAROUSEL - MAX_IMAGE_ON_ONE_SLIDE))){
	// 			setTranslateX(p => p += TRANSLATE_X_WIDTH)
	// 		}
	// 		else if(translateX === (TRANSLATE_X_ONE_IMAGE * (COUNT_OF_IMAGES_ON_THE_CAROUSEL - MAX_IMAGE_ON_ONE_SLIDE))) {
	// 			console.log('конец')
	// 			setTranslateX(p => p -= TRANSLATE_X_WIDTH)
	// 		}
	// 		else if(translateX === 0) {
	// 			setTranslateX(p => p += TRANSLATE_X_WIDTH)
	// 		}
	// 	}, 4000);
	// 	return () => {
	// 		clearInterval(interval)
	// 	};
	// }, [])
	
	return (
		<div className={`carousel hidden sm:flex w-fit flex-row py-6 px-10 lg:px-12 gap-10 items-center ${className}`}>
			<div className='absolute top-0 left-0 w-full h-full bg-white opacity-70 z-10 rounded-[90px]'></div>

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
				><ArrowL size={'2rem'}/></div>
				<div className='min-w-[30px] text-center flex flex-row items-start select-none'>
					<span className='text-2xl font-semibold'>{countOfViewedImages}</span>
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
				><ArrowR size={'2rem'}/></div>
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
						// return <Image 
						// 	key={id}
						// 	$image={item}
						// 	$RESULT_IMAGE_WIDTH={RESULT_IMAGE_WIDTH}
						// 	$IMG_WIDTH={IMG_WIDTH}
						// 	className={`bg-cover bg-no-repeat bg-center rounded-2xl `}
						// ></Image>
					})}
				</div>
				
			</div>
		</div>
	)
}

// const Image = styled.div`
// 	background-image: ${props => `url("${props.$image}")`};
// 	min-width: ${props => `${props.$RESULT_IMAGE_WIDTH}px`};
// 	height: ${props => `${props.$IMG_WIDTH / 1.8}px`};

// 	@media (max-width: 1280px) {
// 		min-width: ${props => `${props.$RESULT_IMAGE_WIDTH / 100 * 80}px`};
// 		height: ${props => `${(props.$IMG_WIDTH / 1.8) / 100 * 80}px`};
// 	}    
// `