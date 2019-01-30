import React, { Component } from "react";
import { Container, Table, Button } from "semantic-ui-react";
import ProductsList from "../components/ProductsList";
import "../style/productsListContainer.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchProductsError,
	fetchProductsSucess,
	deleteItem
} from "../actions";

class ProductsListContainer extends Component {
	constructor(props){
		super(props)
		this.deleteProduct = this.deleteProduct.bind(this)
	}
  componentDidMount() {
    this.props.fetchProducts();
    axios.get("/api/products")
      .then(res => res.data)
      .then(products => this.props.fetchProductsSucess(products))
      .catch(error => this.props.fetchProductsError(error));
	}
	
	deleteProduct(id){
		this.props.deleteItem(id)
		axios.delete(`/api/products/${id}`)
		.then(res => console.log(res))
		.catch(error => console.error(error))
	}

  render() {
    return (
      <Container id="products-list-container">
				<Button 
					icon="plus" 
					content="Add new product" 
					color="green" 
					floated="right" 
					className="btn-add"
					as={Link} to="/create-new-product" 
				/>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Picture</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Stock</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Reference</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <ProductsList products={this.props.products} deleteProduct={this.deleteProduct} />
        </Table>
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
	fetchProductsSucess,
	deleteItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer);
