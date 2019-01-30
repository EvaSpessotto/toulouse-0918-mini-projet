import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Sidebar,
  Menu,
  Icon,
  Button
} from "semantic-ui-react";
class Home extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="slide along"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to='/products'>
              <Icon name="list" />
              Products
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

         
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Home;
