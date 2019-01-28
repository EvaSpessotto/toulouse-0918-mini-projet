import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header } from 'semantic-ui-react';
import { fetchSingleProduct, fetchSingleProductError, fetchSingleProductSuccess } from '../actions';
import axios from 'axios';
import Product from '../components/product/Product';


class ProductContainer extends Component {

	componentDidMount() {
		this.props.fetchSingleProduct()
		const id = this.props.match.params.id
		axios.get(`/api/products/${id}`)
		.then(res => res.data)
      .then(product => this.props.fetchSingleProductSuccess(product))
      .catch(error => this.props.fetchSingleProductError(error))
	}
	
	render() {
		return (
			<Container style={{marginTop: '30vh'}}>
				<Product product={this.props.product} />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	product: state.products.singleProduct
})

const mapDispatchToProps = {
	fetchSingleProduct,
	fetchSingleProductError,
	fetchSingleProductSuccess
}
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ProductContainer);