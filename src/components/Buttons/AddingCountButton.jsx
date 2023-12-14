import classNames from 'classnames'
import { useState } from 'react'

export default function AddingCountButton({ getCount, cart = false }) {
	const [count, setCount] = useState(1)

	return (
		<div
			className={classNames(
				'rounded-3xl flex flex-row gap-3 items-center border-black border-2 w-min',
				{ 'px-5 py-2': cart },
				{ 'px-7 py-3': !cart }
			)}
		>
			<span
				className={classNames(
					'font-medium cursor-pointer select-none px-1',
					{ 'text-2xl ': cart },
					{ 'text-3xl ': !cart }
				)}
				onClick={() => {
					count > 1 && setCount(p => p - 1)
					count > 1 && getCount(count - 1)
				}}
			>
				-
			</span>
			<p
				className={classNames(
					'font-medium cursor-pointer select-none px-1',
					{ 'text-xl ': cart },
					{ 'text-3xl ': !cart }
				)}
				style={{ minWidth: '15px' }}
			>
				{count}
			</p>
			<span
				className={classNames(
					'font-medium cursor-pointer select-none px-1',
					{ 'text-2xl ': cart },
					{ 'text-3xl ': !cart }
				)}
				onClick={() => {
					setCount(p => p + 1)
					getCount(count + 1)
				}}
			>
				+
			</span>
		</div>
	)
}
