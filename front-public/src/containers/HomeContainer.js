import React, { Component } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeProductsList from '../components/Home/HomeProductsList';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from '../actions';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchProducts()
    axios.get('http://localhost:5000/api/products')
      .then(res => res.data)
      .then(products => this.props.fetchProductsSuccess(products))
      .catch(error => this.props.fetchProductsError(error))
  }

  render() {
    return (
      <div>
        <HomeHeader />
        <HomeProductsList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = {
  fetchProducts, fetchProductsSuccess, fetchProductsError
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);