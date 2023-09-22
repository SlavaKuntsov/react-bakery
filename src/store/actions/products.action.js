import productApi from '../../utils/api/product'

const actions = {
	fetchDataRequest : id => ({
		type: 'FETCH_DATA_REQUEST',
		payload: id
	}),
	fetchDataSuccess: () => ({
		type: 'FETCH_DATA_SUCCESS',
	}),
	fetchDataError: () => ({
		type: 'FETCH_DATA_ERROR',
	}),
	fetchData: () => dispatch => {
		productApi
			.getAll()
			.then(({data}) => {
				dispatch(actions.setMessages(data))
			})
			.catch(() => {
				dispatch(actions.setIsLoading(false))
			})
	}
}

export default actions