const initialState = {
	bread: [],
	cake: [],
	dough: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA_REQUEST': 
			return {
				...state
		}
		case 'FETCH_BREAD_SUCCESS':
			return {
				...state,
				bread: payload
			}
		case 'FETCH_CAKE_SUCCESS':
			return {
				...state,
				cake: payload
			}
		case 'FETCH_DOUGHT_SUCCESS':
			return {
				...state,
				dough: payload
			}
		case 'FETCH_DATA_ERROR':
			return {
				...state,
			}
		default:
			return state
	}
}

