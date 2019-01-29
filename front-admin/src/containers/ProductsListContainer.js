import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProductsList from '../components/ProductsList';
import '../style/productsListContainer.scss';
import axios from 'axios';

class ProductsListContainer extends Component {

	componentDidMount() {
	}
	
	render() {
		return (
			<Container id="products-list-container">
				<ProductsList />
			</Container>
		);
	}
}

export default ProductsListContainer;