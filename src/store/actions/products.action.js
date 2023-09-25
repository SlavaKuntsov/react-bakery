import productApi from '../../utils/api/product'

const actions = {
	fetchDataRequest : id => ({
		type: 'FETCH_DATA_REQUEST',
		payload: id
	}),
	fetchDataSuccess: data => ({
		type: 'FETCH_DATA_SUCCESS',
		payload: data
	}),
	fetchDataError: () => ({
		type: 'FETCH_DATA_ERROR',
	}),
	fetchData: () => dispatch => {
		productApi
			.getAll()
			.then(({data}) => {
				console.log('data: ', data);
				dispatch(actions.fetchDataSuccess(data))
			})
			.catch(() => {
				console.log('error')
				dispatch(actions.fetchDataError())
			})
	}
}

export default actions