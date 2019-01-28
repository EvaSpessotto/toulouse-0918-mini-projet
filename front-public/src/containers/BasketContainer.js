import React, { Component } from "react";
import { connect } from "react-redux";
import Basket from "../components/basket/Basket";
import { Table, Container } from "semantic-ui-react";

class BasketContainer extends Component {
  render() {
    return (
      <Container style={{ marginTop: '30vh', marginBottom: "100px" }}>
        <h1>My cart</h1>
        {
          this.props.cart.length < 1 ? (
          <h4>Woops, there's nothing here, sorry... Continue shopping ?</h4>
        ) : (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Basket cart={this.props.cart} />
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell>Total: {this.props.total}€</Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total
});

export default connect(mapStateToProps)(BasketContainer);
