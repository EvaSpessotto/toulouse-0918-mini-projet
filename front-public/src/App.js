import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import BasketContainer from './containers/BasketContainer';
import ProductsListContainer from './containers/ProductsListContainer';
import ProductContainer from './containers/ProductContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/mon-panier' component={BasketContainer} />
					<Route path='/products' component={ProductsListContainer} />
					<Route path='/products/:id' component={ProductContainer} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
