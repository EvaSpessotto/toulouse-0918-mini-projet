import React, { Fragment } from 'react';
import { Button, Card, Image, Placeholder, Container, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../../style/homeProductsList.scss';

const HomeProductsList = ({products, addProductToCart}) => {
  return (
    <Container id="home-products-list">
      <Card.Group centered itemsPerRow='4' stackable>
        {
          products.map((product) => {
            const { name, id, price, picture  } = product;
            const quantity = 1;
            return (
              <Card key={id} style={{border: '0px'}}>
                <Image src={picture} fluid as={Link} to={`/products/${id}`} />
                <Card.Content >
                  <Card.Header as={Link} to={`/products/${id}`}>{name.toUpperCase()}</Card.Header>
                  <p>{price}€</p>
                </Card.Content>
                <Button animated='vertical' onClick={() => addProductToCart(id, name, picture, quantity, price)} primary >
                  <Button.Content hidden>Add to cart</Button.Content>
                  <Button.Content  visible circular>
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