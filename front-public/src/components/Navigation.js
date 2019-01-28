import React, { Component } from "react";
import { Menu, Button, Container, Icon, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Basket from "./basket/Basket";

class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu fixed="top" borderless>
        <Container>
          <Menu.Item as={Link} name="super chaussettes" to="/"  />
          <Menu.Item
						name="products"
						as={Link}
						to='/products'
          />
          <Menu.Item position='right'>
            <Search />
          </Menu.Item>
          <Menu.Item>
            <Button as={Link} to="/mon-panier">
              <Icon name="shop" />
              {this.props.cart.length === 0 ? "" : this.props.cart.length}
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button primary>Sign in</Button>
          </Menu.Item>
          <Menu.Item>
            <Button secondary>Sign Up</Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(Navigation);
