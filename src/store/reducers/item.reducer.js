const initialState = {
	id: null,
	itemInfo: {}
}

export const itemReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'OPEN_ITEM':
			return {
				...state,
				id: payload.id
			}
		case 'FETCH_ITEM':
			return{
				...state,
				itemInfo: payload.itemInfo
			}
		case 'CLOSE_ITEM':
			return {
				id: null,
				itemInfo: null
			}

		default:
			return state
	}
}
