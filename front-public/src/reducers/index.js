
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_TO_CART
} from '../actions';

const initialState = {
  loading: false, 
  products: [],
  error: null,
  cart: [], 
  total: 0
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
    case ADD_TO_CART: {
       return {...state, cart: [...state.cart, 
        { id: action.id, 
          name: action.name, 
          quantity: action.quantity, 
          picture: action.picture,
          price: action.price
        }],
        total: state.total + action.price
      }
    }
    default:
      return state;
  }
};
export default reducer;