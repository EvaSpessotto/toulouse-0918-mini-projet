import React from "react";
import { Table, Button, Header, Image } from "semantic-ui-react";

const Basket = ({ cart, removeItem }) => {
  return (
    <Table.Body>
      {cart.map((item, index) => (
        <Table.Row key={index}>
          <Table.Cell>
            <Header as="h4" image>
              <Image src={item.picture} rounded size="mini" />
              <Header.Content>{item.name}</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{item.quantity}</Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
          <Table.Cell >
						<Button 
							icon="close" 
							color="red" 
							onClick={() => removeItem(item.id, item.price)}
						/>
					</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default Basket;
