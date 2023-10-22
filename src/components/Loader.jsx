import { Spin } from 'antd';

export default function Loader () {
	
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<Spin
				size="large"
			/>
		</div>
	)
}

