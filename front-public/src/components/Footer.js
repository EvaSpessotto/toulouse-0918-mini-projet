import React, { Component } from 'react';
import { Segment, Container, Grid, Header, Icon, Item, Divider } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Container style={{marginBottom: '20px'}}>
        <Divider />
        <Grid style={{marginTop: '20px'}} stackable>
          <Grid.Row columns='4'>
            <Grid.Column>
              <Header>About</Header>
              <p>About us</p>
              <p>Carrer</p>
              <p>Corporate Sales</p>
              <p>Where to buy</p>
            </Grid.Column>
            <Grid.Column>
              <Header>Support</Header>
              <p>Contact</p>
              <p>Returns</p>
              <p>Warranty</p>
              <p>Help</p>
            </Grid.Column>
            <Grid.Column>
              <Header>Legal</Header>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Patends</p>
            </Grid.Column>
            <Grid.Column>
              <Header>Other</Header>
              <p>Account</p>
              <p>Affiliate Program</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' style={{marginTop: '50px'}}>
            <Grid.Column>
              <Icon name='facebook' size='large' />
              <Icon name='instagram' size='large' />
              <Icon name='youtube' size='large' />
              <Icon name='twitter' size='large' />
              <Icon name='pinterest' size='large' />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <Grid.Column>
            <p>@2019 - All right reserved</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Footer;