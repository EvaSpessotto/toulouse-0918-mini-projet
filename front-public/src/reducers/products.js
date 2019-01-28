
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_ERROR,
	FETCH_SINGLE_PRODUCT,
	FETCH_SINGLE_PRODUCT_ERROR,
	FETCH_SINGLE_PRODUCT_SUCCESS
} from '../actions';

const initialState = {
  loading: false, 
  products: [],
	error: null,
	product: {}
}

const reducer = (state = initialState, action ) => {
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
		case FETCH_SINGLE_PRODUCT: {
			return {...state, loading: true }
		}
		case FETCH_SINGLE_PRODUCT_SUCCESS: {
			// const singleProduct = state.products.filter(product => product.id === action.product.id)
			return {...state, loading: false, product: action.product}
		}
		case FETCH_SINGLE_PRODUCT_ERROR: {
			return {...state, loading: false, error: action.error}
		}
    default:
      return state;
  }
};
export default reducer;