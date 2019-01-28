
import { 
	ADD_TO_CART, 
	REMOVE_FROM_CART
} from '../actions';

const initialState = {
  cart: [], 
  total: 0
}

const reducer = (state = initialState, action ) => {
  switch (action.type) {
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
		case REMOVE_FROM_CART: {
			const cart = state.cart.filter(
				product => product.id !== action.id
			)
			return {cart, total: state.total - action.price}
		}
    default:
      return state;
  }
};
export default reducer;