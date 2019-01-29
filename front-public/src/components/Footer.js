import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Divider } from 'semantic-ui-react'
import '../style/footer.scss';
class Footer extends Component {
  render() {
    return (
      <Container id="footer-container">
        <Divider />
        <Grid id='footer' textAlign='center' stackable>
          <Grid.Row columns='4' >
            <Grid.Column textAlign='left'>
              <Header>About</Header>
              <p>About us</p>
              <p>Carrer</p>
              <p>Corporate Sales</p>
              <p>Where to buy</p>
            </Grid.Column>
            <Grid.Column textAlign='left'>
              <Header>Support</Header>
              <p>Contact</p>
              <p>Returns</p>
              <p>Warranty</p>
              <p>Help</p>
            </Grid.Column>
            <Grid.Column textAlign='left'>
              <Header>Legal</Header>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Patends</p>
            </Grid.Column>
            <Grid.Column textAlign='left'>
              <Header>Other</Header>
              <p>Account</p>
              <p>Affiliate Program</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row  className="socials" >
            <Grid.Column>
              <Icon link name='facebook' size='large' />
            </Grid.Column>
            <Grid.Column>
              <Icon link name='instagram' size='large' />
            </Grid.Column>
            <Grid.Column>
              <Icon link name='youtube' size='large' />
            </Grid.Column>
            <Grid.Column>
              <Icon link name='twitter' size='large' />
            </Grid.Column>
            <Grid.Column>
              <Icon link name='pinterest' size='large' />
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