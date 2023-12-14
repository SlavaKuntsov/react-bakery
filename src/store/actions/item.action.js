import itemApi from 'utils/api/item'

const actions = {
	openItem: data => ({
		type: 'OPEN_ITEM',
		payload: data
	}),
	fetchItem: data => ({
		type: 'FETCH_ITEM',
		payload: data
	}),
	closeItem: () => ({
		type: 'CLOSE_ITEM'
	}),
	fetchData: id => async dispatch => {
		await itemApi
			.getItemById(id)
			.then(({data}) => {
				// console.log(`data item ${id}: `, data);
				dispatch(actions.fetchItem({
					itemInfo: data
				}))
			})
			.catch(() => {
				console.log('error item')
			})
	}
}

export default actions
