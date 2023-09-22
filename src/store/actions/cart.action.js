const actions = {
	addToCart: id => ({
		type: 'ADD_TO_CART',
		payload: id
	}),
	toggleCart: () => ({
		type: 'TOGGLE_CART',
	})
}

export default actions