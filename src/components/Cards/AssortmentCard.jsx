import LazyImage from "components/LazyImage";


export default function AssortmentCard ({ img, title }) {
	
	return (
		<div className="card bg-[#4e2224f2] flex shrink-0 grow flex-col rounded-2xl basis-full sm:basis-1/4">
			<LazyImage 
				src={img} 
				className='rounded-t-2xl h-full'
			/>
			<h3 className="font-semibold text-xl sm:text-xl lg:text-2xl text-white px-10 sm:px-6 md:px-10 py-8 text-center tracking-widest break-words min-w-[178px]">{title}</h3>
		</div>
	)
}

