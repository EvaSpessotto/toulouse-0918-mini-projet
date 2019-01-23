import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' component={HomeContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
