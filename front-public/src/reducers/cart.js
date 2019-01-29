import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  cart: [],
  total: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // return {
      //   ...state,
      //   total: state.total + action.price,
      //   cart: [
      //     ...state.cart,
      //     {
      //       id: action.id,
      //       name: action.name,
      //       quantity: action.quantity,
      //       picture: action.picture,
      //       price: action.price
      //     }
      //   ]
			// };
		
			const itemIndex = state.cart.findIndex(product => product.id === action.id);
			const newCart = [...state.cart]
			let newTotal = state.total + action.price*action.quantity
			if (itemIndex > -1){
				const item = {...state.cart[itemIndex]}
				item.quantity+= action.quantity
				newCart.splice(itemIndex, 1, item)
			}
			else {
				const { type, ...newItem } = action;
				newCart.push(newItem)
			}
			return {
				...state,
				cart: newCart,
				total: newTotal
			}

			}

    case REMOVE_FROM_CART: {
      const cart = state.cart.filter(product => product.id !== action.id);
      return { cart, total: state.total - action.price };
    }
    default:
      return state;
  }
};
export default reducer;
