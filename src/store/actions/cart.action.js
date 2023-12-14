const actions = {
	addToCart: data => ({
		type: 'ADD_TO_CART',
		payload: data
	}),
	changeCount: data  => ({
		type: 'CHANGE_ITEM_COUNT',
		payload: data
	}),
	toggleCart: () => ({
		type: 'TOGGLE_CART',
	})
}

export default actions