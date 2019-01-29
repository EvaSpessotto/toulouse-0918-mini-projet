import React, { Component } from 'react';
import ProductsList from '../components/products/ProductsList';
import  { connect } from 'react-redux';
import { addToCart } from '../actions';


class ProductsListContainer extends Component {
	constructor(props){
    super(props)
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(id, name, picture, quantity, price) {
    this.props.addToCart(id, name, picture, quantity, price);
  }
	render() {
		return (
			<ProductsList products={this.props.products} addProductToCart={this.addProductToCart} />
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.products
})

const mapDispatchToProps = {
	addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);