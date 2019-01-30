import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ProductsListContainer from "./containers/ProductsListContainer";
import CreateFormContainer from './containers/CreateFormContainer';
import { Link } from "react-router-dom";

import {
  Sidebar,
  Menu,
  Icon,
  Button
} from "semantic-ui-react";
class App extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
				 <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/products">
            <Icon name="list" />
            Products
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          {this.state.visible === false ? (
            <Button onClick={this.handleShowClick} icon="bars" />
          ) : (
            <Button
              disabled={visible}
              onClick={this.handleShowClick}
              icon="close"
            />
          )}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductsListContainer} />
						<Route path="/create-new-product" component={CreateFormContainer} />
          </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default App;
