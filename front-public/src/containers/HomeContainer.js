import React, { Component } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeProductsList from '../components/Home/HomeProductsList';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeProductsList />
      </div>
    );
  }
}

export default HomeContainer;