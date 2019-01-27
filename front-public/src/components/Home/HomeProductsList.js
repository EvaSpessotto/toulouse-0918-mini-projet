import React, { Fragment } from 'react';
import { Button, Card, Image, Placeholder, Container, Icon, Header } from 'semantic-ui-react'

const HomeProductsList = ({products, addProductToCart}) => {
  return (
    <Container style={{ marginTop: '100px', marginBottom: '200px' }}>
      <Card.Group centered itemsPerRow='4' stackable>
        {
          products.map((product) => {
            const { name, id, description, price, picture  } = product;
            const quantity = 1;
            return (
              <Card key={id} style={{border: '0px'}}>
                <Image src={picture} fluid />
                <Card.Content textAlign='center'>
                  <Card.Header>{name.toUpperCase()}</Card.Header>
                  <Header>{price}€</Header>
                </Card.Content>
                <Button animated='vertical' onClick={() => addProductToCart(id, name, picture, quantity, price)} primary>
                  <Button.Content hidden>Add to cart</Button.Content>
                  <Button.Content  visible>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
              </Card>
            )
          })
        }
      </Card.Group>
    </Container>
  );

}

export default HomeProductsList;