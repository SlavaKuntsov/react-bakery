const initialState = {
	products: [],
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
		case 'CHANGE_ITEM_COUNT':
			return {
				...state,
				products: state.products.some(p => p.id === payload.id)
					? state.products.map(p => {
							if (p.id === payload.id) {
								return { ...p, count: payload.count }
							}
							return p
					})
					: state.products
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

