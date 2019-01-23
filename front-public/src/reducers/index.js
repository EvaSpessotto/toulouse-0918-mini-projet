
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../actions';

const initialState = {
  loading: false, 
  products: [],
  error: null
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
    default:
      return state;
  }
};
export default reducer;