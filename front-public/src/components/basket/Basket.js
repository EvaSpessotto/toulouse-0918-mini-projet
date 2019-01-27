import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Container, Header, Image } from "semantic-ui-react";

const Basket = ({ cart }) => {
  return (
    <Table.Body>
      {cart.map((item, index) => (
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image src={item.picture} rounded size="mini" />
              <Header.Content>{item.name}</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{item.quantity}</Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default Basket;
