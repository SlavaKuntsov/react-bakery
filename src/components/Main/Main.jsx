import StartBlock from "components/Main/StartBlock"

export default function Main() {
	return (
		<div className='w-full h-auto overflow-hidden'>
			{/* <div 
				className='gradient w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 
					opacity-90 bg-[#fbeecf] blur-[240px] rounded-full 
					absolute top-0 sm:-right-20 lg:-right-[200px]
					hidden md:block
					'
			></div> */}
			<StartBlock />
		</div>
	)
}
