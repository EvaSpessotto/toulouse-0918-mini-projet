
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../actions';

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
		default:
			return state;
	}
}

export default reducer;

