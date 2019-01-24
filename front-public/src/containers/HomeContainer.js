import React, { Component } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeProductsList from '../components/Home/HomeProductsList';
import axios from 'axios';
import { connect } from 'react-redux';
import { 
  fetchProducts, 
  fetchProductsError, 
  fetchProductsSuccess,
  addToCart
} from '../actions';

class HomeContainer extends Component {
  constructor(props){
    super(props)

    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts()
    axios.get('http://localhost:5000/api/products')
      .then(res => res.data)
      .then(products => this.props.fetchProductsSuccess(products))
      .catch(error => this.props.fetchProductsError(error))
  }

  addProductToCart(productId, name) {
    this.props.addToCart(productId, name);
  }

  render() {
    return (
      <div>
        <HomeHeader />
        <HomeProductsList products={this.props.products} addProductToCart={this.addProductToCart} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
})

const mapDispatchToProps = {
  fetchProducts, 
  fetchProductsSuccess, 
  fetchProductsError,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);