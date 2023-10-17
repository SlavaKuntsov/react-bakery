import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export default function Error() {
	return (
		<Result
			status='404'
			title='404'
			subTitle='К сожалению, страница, на которую вы перешли, не существует.'
			extra={
				<Link to='/'>
					<Button>Вернуться на главную</Button>
				</Link>
			}
		/>
	)
}
