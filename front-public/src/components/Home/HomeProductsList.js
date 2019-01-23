import React, { Fragment } from 'react';
import { Button, Card, Image, Placeholder, Container, Icon, Header } from 'semantic-ui-react'

const HomeProductsList = () => {
  return (
    <Container style={{ marginTop: '100px', marginBottom: '200px' }}>
      <Card.Group centered itemsPerRow='4' stackable>
        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
          <Card.Content>
            <Card.Header>Truc à vendre</Card.Header>
            <Card.Meta>
              <span className='price'>60€</span>
            </Card.Meta>
            <Card.Description>Un truc dont vous avez vraiment besoin</Card.Description>
          </Card.Content>
          <Button animated='vertical' primary>
            <Button.Content hidden>Ajouter au panier</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
          <Card.Content>
            <Card.Header>Truc à vendre</Card.Header>
            <Card.Meta>
              <span className='price'>60€</span>
            </Card.Meta>
            <Card.Description>Un truc dont vous avez vraiment besoin</Card.Description>
          </Card.Content>
          <Button animated='vertical' primary>
            <Button.Content hidden>Ajouter au panier</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
          <Card.Content>
            <Card.Header>Truc à vendre</Card.Header>
            <Card.Meta>
              <span className='price'>60€</span>
            </Card.Meta>
            <Card.Description>Un truc dont vous avez vraiment besoin</Card.Description>
          </Card.Content>
          <Button animated='vertical' primary>
            <Button.Content hidden>Ajouter au panier</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
          <Card.Content>
            <Card.Header>Truc à vendre</Card.Header>
            <Card.Meta>
              <span className='price'>60€</span>
            </Card.Meta>
            <Card.Description>Un truc dont vous avez vraiment besoin</Card.Description>
          </Card.Content>
          <Button animated='vertical' primary>
            <Button.Content hidden>Ajouter au panier</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
          <Card.Content>
            <Card.Header>Truc à vendre</Card.Header>
            <Card.Meta>
              <span className='price'>60€</span>
            </Card.Meta>
            <Card.Description>Un truc dont vous avez vraiment besoin</Card.Description>
          </Card.Content>
          <Button animated='vertical' primary>
            <Button.Content hidden>Ajouter au panier</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Card>

      </Card.Group>
    </Container>
  );

}

export default HomeProductsList;