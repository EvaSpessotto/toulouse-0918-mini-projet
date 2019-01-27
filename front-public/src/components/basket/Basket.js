import React, { Component } from 'react';
import { connect } from 'react-redux';


const Basket = ({cart}) => {
    return (
        <div style={{marginTop: '100px'}}>
            <h1>Mon panier</h1>
            {
              cart.map((item, index) => 
                <h4 key={index}>{item.name}</h4>
              )
            }

        </div>
    );
}

export default Basket;