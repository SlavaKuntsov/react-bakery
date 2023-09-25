const initialState = {
	allProducts: []
}

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA_REQUEST': 
			return {
				...state
		}
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				allProducts: payload
			}
		case 'FETCH_DATA_ERROR':
			return {
				...state,
			}
		default:
			return state
	}
}

