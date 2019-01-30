import React, { Component } from "react";
import { Table, Button, Image } from "semantic-ui-react";
import moment from "moment";
import { Link } from 'react-router-dom';

const ProductsList = ({ products, deleteProduct }) => {
  return (
    <Table.Body>
      {products.map(product => {
        const {
          name,
          picture,
          description,
          stock,
          price,
          createdAt,
					reference,
					id
        } = product;
        return (
          <Table.Row>
            <Table.Cell>
              <Image src={picture} size="mini" />
            </Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{stock} items</Table.Cell>
            <Table.Cell>{price}€</Table.Cell>
            <Table.Cell>{moment(createdAt).format("l")}</Table.Cell>
            <Table.Cell>n°{reference}</Table.Cell>
            <Table.Cell textAlign="right">
              <Button icon="edit" color="blue" as={Link} to="/create-new-product" />
            </Table.Cell>
            <Table.Cell>
              <Button icon="close" color="red" onClick={() => deleteProduct(id)}/>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  );
};

export default ProductsList;
