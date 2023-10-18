export const Gradient = () => {
	return (
		<div
			className='gradient w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 
					opacity-90 bg-[#fbeecf] blur-[240px] rounded-full 
					absolute top-0 sm:-right-20 lg:-right-[200px]
					hidden md:block'
		></div>
	)
}

export const GradientMobile = () => {
	return (
		<div
			className='mobile-gradient block sm:hidden overflow-hidden
			w-full h-[600px] 
			absolute top-0 z-0
			bg-[#ffeab7] blur-[300px]'
		></div>
	)
}
