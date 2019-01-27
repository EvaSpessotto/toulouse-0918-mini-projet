import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from '../components/basket/Basket';


class BasketContainer extends Component {
    render() {
        return (
            <div>
                <Basket cart={this.props.cart} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(
    mapStateToProps,
)(BasketContainer);