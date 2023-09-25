const initialState = {
	products: [{id: 1}],
	isCartOpen: false,
}

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_CART': 
			return {
				...state,
				products: state.products.some(p => p.id === payload.id)
						? state.products.filter(p => p.id !== payload.id)
						: [...state.products, payload]
		}
		case 'TOGGLE_CART':
			return {
				...state,
				isCartOpen: !state.isCartOpen
			}

		default:
			return state
	}
}

