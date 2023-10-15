import { Suspense } from "react";


export default function LazyImage ({ className, src }) {
	
	return (
		<Suspense fallback={<>img...</>}>
			<img
				className={className}
				src={src}
				alt='img' 
			/>
		</Suspense>
	)
}

