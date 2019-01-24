import React, { Component } from 'react';
import { Menu, Button, Container, Icon, IconGroup } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      
        <Menu  fixed='top'>
        <Container>
          <Menu.Item name='super chaussettes' active={activeItem === 'super chaussettes'} onClick={this.handleItemClick} />
          <Menu.Item
            name='products'
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item position='right'>
            <Button>
                <Icon name='shop'/> 
                {
                  this.props.cart.length === 0
                  ? ''
                  : this.props.cart.length
                }
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign in</Button>
          </Menu.Item>
          <Menu.Item >
            <Button secondary>Sign Up</Button>
          </Menu.Item>
      </Container>

        </Menu>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Navigation);