import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProductsList from '../components/ProductsList';
import '../style/productsListContainer.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchProducts, fetchProductsError, fetchProductsSucess} from '../actions';

class ProductsListContainer extends Component {

	componentDidMount() {
		this.props.fetchProducts()
		axios.get('http://localhost:5000/api/products')
			.then(res => res.data)
			.then(products => this.props.fetchProductsSucess(products))
			.catch(error => this.props.fetchProductsError(error))
	}
	
	render() {
		return (
			<Container id="products-list-container">
				<ProductsList />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products
});

const mapDispatchToProps = {
	fetchProducts, 
	fetchProductsError,
	fetchProductsSucess
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);