import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { fetchSingleProduct, fetchSingleProductError, fetchSingleProductSuccess } from '../actions';
import axios from 'axios';
import Product from '../components/product/Product';
import '../style/product.scss'
import { addToCart } from '../actions';


class ProductContainer extends Component {
	constructor(props){
		super(props)
		this.addToCart = this.addToCart.bind(this)
	}

	componentDidMount() {
		this.props.fetchSingleProduct()
		const id = this.props.match.params.id
		axios.get(`/api/products/${id}`)
		.then(res => res.data)
      .then(product => this.props.fetchSingleProductSuccess(product))
      .catch(error => this.props.fetchSingleProductError(error))
	}

	addToCart(id, name, picture, quantity, price ) {
		this.props.addToCart(id, name, picture, quantity, price)
	}
	
	render() {
		return (
			<Container id="product-container">
				{
					this.props.product && 
					<Product 
					{...this.props.product} 
					addToCart={this.addToCart} 
					/>
				}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	product: state.products.product
})

const mapDispatchToProps = {
	fetchSingleProduct,
	fetchSingleProductError,
	fetchSingleProductSuccess,
	addToCart,
}
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ProductContainer);