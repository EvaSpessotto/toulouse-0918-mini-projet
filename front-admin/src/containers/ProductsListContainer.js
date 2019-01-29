import React, { Component } from "react";
import { Container, Table } from "semantic-ui-react";
import ProductsList from "../components/ProductsList";
import "../style/productsListContainer.scss";
import axios from "axios";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSucess
} from "../actions";

class ProductsListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    axios
      .get("http://localhost:5000/api/products")
      .then(res => res.data)
      .then(products => this.props.fetchProductsSucess(products))
      .catch(error => this.props.fetchProductsError(error));
  }

  render() {
    return (
      <Container id="products-list-container">
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

          <ProductsList products={this.props.products} />

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
  fetchProductsSucess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer);
