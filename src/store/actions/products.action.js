import productApi from 'utils/api/product'

const actions = {
	fetchDataRequest : id => ({
		type: 'FETCH_DATA_REQUEST',
		payload: id
	}),
	fetchDataType_Bread_Success: data => ({
		type: 'FETCH_BREAD_SUCCESS',
		payload: data
	}),
	fetchDataType_Cake_Success: data => ({
		type: 'FETCH_CAKE_SUCCESS',
		payload: data
	}),
	fetchDataType_Dough_Success: data => ({
		type: 'FETCH_DOUGHT_SUCCESS',
		payload: data
	}),
	fetchDataError: () => ({
		type: 'FETCH_DATA_ERROR',
	}),
	fetchData: type => async dispatch => {
		await productApi
			.getCatalogItemsL(type)
			.then(({data}) => {
				switch (type) {
					case 'bread':
						dispatch(actions.fetchDataType_Bread_Success(data))
						break;
					case 'cake':
						dispatch(actions.fetchDataType_Cake_Success(data))
						break;
					case 'dough':
						dispatch(actions.fetchDataType_Dough_Success(data))
						break;
				
					default:
						break;
				}
				
			})
			.catch(() => {
				console.log('error')
				dispatch(actions.fetchDataError())
			})
	}
}

export default actions