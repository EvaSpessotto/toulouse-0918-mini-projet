export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';
export const FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS';
export const FETCH_SINGLE_PRODUCT_ERROR = 'FETCH_SINGLE_PRODUCT_ERROR';

export const ADD_TO_CART = 'ADD_TO_CART';
export const HANDLE_QUANTITY = 'HANDLE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


// Récupération des données
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error
});

// Récupération d'un produit
export const fetchSingleProduct = () => ({
  type: FETCH_SINGLE_PRODUCT
});

export const fetchSingleProductSuccess = (product) => ({
  type: FETCH_SINGLE_PRODUCT_SUCCESS,
  product
});

export const fetchSingleProductError = (error) => ({
  type: FETCH_SINGLE_PRODUCT_ERROR,
  error
});


// Ajout au panier
export const addToCart = (id, name, picture, quantity, price) => ({
  type: ADD_TO_CART,
  id, name, picture, quantity, price
});

// Supprimer du panier
export const removeFromCart = (id, price) => ({
	type: REMOVE_FROM_CART,
	id, price
})