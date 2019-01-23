import React, { Component } from 'react';
import { Segment, Container, Grid, Header, Icon, Item, Divider } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Grid divided columns='equal' stackable relaxed='very' verticalAlign='middle'>
          <Grid.Column>
            <Header>
              <Icon name='map marker alternate'/>
              28 grande rue Saint-Nicolas, Toulouse
            </Header>
            <Header>
              <Icon name='phone'/>
              085625729
            </Header>
            <Header>
              <Icon name='mail'/>
                shopping@contact.com
            </Header>
          </Grid.Column>
          <Grid.Column textAlign='left' >
            <Header >About the company</Header>
            <p>Aliqua amet qui eiusmod enim exercitation sunt laboris. Deserunt id officia eiusmod magna esse aliquip. Cupidatat dolor reprehenderit fugiat et Lorem commodo. Qui ut aliquip fugiat tempor irure enim ex.</p>
            <p>Aliqua amet qui eiusmod enim exercitation sunt laboris. Deserunt id officia eiusmod magna esse aliquip. Cupidatat dolor reprehenderit fugiat et Lorem commodo. Qui ut aliquip fugiat tempor irure enim ex.</p>
            <Icon name='facebook square' size='big'/>
            <Icon name='instagram' size='big'/>
            <Icon name='twitter square' size='big'/>
          </Grid.Column>
        </Grid>     
      </Container> 
    );
  }
}

export default Footer;