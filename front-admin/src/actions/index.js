export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'

export const fetchProducts = () => ({
	type: FETCH_PRODUCTS
});

export const fetchProductsSucess = (products) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	products
});

export const fetchProductsError = (error) => ({
	type: FETCH_PRODUCTS_ERROR,
	error
});