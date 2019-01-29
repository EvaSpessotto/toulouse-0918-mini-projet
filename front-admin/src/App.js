import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsListContainer from './containers/ProductsListContainer';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ProductsListContainer} />
      </Switch>
    );
  }
}

export default App;
