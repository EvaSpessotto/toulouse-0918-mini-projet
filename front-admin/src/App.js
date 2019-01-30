import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductsListContainer from './containers/ProductsListContainer';
class App extends Component {
  render() {
    return (
      <Switch>
				<Route exact path='/' component={Home} />
        <Route path='/products' component={ProductsListContainer} />
      </Switch>
    );
  }
}

export default App;
