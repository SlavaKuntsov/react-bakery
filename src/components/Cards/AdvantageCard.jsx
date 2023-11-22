import LazyImage from "components/LazyImage";


export default function AdvantageCard ({ icon, title, text}) {
	
	return (
		<div className="advantageCard flex flex-col justify-center items-center gap-10 basis-1/3 grow-0 shrink-0 max-w-[300px] text-center">
			<LazyImage 
				src={icon}
				className='w-28'
			/>
			<h5 className="text-2xl underline underline-offset-2 decoration-from-font">{title}</h5>
			<p className="break-words text-xl">{text}</p>
		</div>
	)
}

