import React, { Fragment } from 'react';
import { Button, Card, Image, Placeholder, Container } from 'semantic-ui-react'

const HomeProductsList = () => {
  return (
    <Container style={{marginTop: '100px', marginBottom: '200px'}}>
      <Card.Group centered itemsPerRow='4' stackable>
        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>

          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length='very short' />
                <Placeholder.Line length='medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>

          <Card.Content extra>
            <Button primary>
              Add
          </Button>
            <Button>Delete</Button>
          </Card.Content>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>

          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length='very short' />
                <Placeholder.Line length='medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>

          <Card.Content extra>
            <Button primary>
              Add
          </Button>
            <Button>Delete</Button>
          </Card.Content>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>

          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length='very short' />
                <Placeholder.Line length='medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>

          <Card.Content extra>
            <Button primary>
              Add
          </Button>
            <Button>Delete</Button>
          </Card.Content>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>

          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length='very short' />
                <Placeholder.Line length='medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>

          <Card.Content extra>
            <Button primary>
              Add
          </Button>
            <Button>Delete</Button>
          </Card.Content>
        </Card>
        <Card>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>

          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length='very short' />
                <Placeholder.Line length='medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>

          <Card.Content extra>
            <Button primary>
              Add
          </Button>
            <Button>Delete</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );

}

export default HomeProductsList;