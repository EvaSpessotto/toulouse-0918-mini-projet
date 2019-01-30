
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS, DELETE_ITEM } from '../actions';

const initialState = {
	products: [],
	error: null, 
	loading: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS: {
			return {...state, loading: true}
		}
		case FETCH_PRODUCTS_SUCCESS: {
			return {...state, loading: false, products: action.products}
		}
		case FETCH_PRODUCTS_ERROR: {
			return {...state, loading: false, error: action.error}
		}
		case DELETE_ITEM: {
			const newProductsList = state.products.filter(product => product.id !== action.id)
			return {...state, products: newProductsList }
		}
		default:
			return state;
	}
}

export default reducer;

