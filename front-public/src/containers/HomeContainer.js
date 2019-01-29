import React, { Component } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeProductsList from '../components/Home/HomeProductsList';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
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
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => this.props.fetchProductsSuccess(products))
      .catch(error => this.props.fetchProductsError(error))
  }

  addProductToCart(id, name, picture, quantity, price) {
    this.props.addToCart(id, name, picture, quantity, price);
  }

  render() {
    return (
      <div>
        <HomeHeader />
				<Header textAlign='center' as="h1">New products !</Header>
        <HomeProductsList products={this.props.products} addProductToCart={this.addProductToCart} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.cart.cart
})

const mapDispatchToProps = {
  fetchProducts, 
  fetchProductsSuccess, 
  fetchProductsError,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);