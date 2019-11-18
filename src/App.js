import React, { Component } from 'react';
import './App.css';

import Product from './components/Product';
import CartItems from './components/CartItems';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            'Headgear commonly used by fishermen. Increases fishing skill marginally.',
          price: 12.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
        {
          id: 2,
          title: 'Metal Hat',
          description: 'Uncomfortable, but sturdy.',
          price: 8.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
      beachGear: [
        {
          id: 3,
          title: 'Tent',
          description: 'Portable shelter.',
          price: 32.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
    };
  }

  addToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item],
    });
  }

  checkout = () => {
    this.setState({ cart: [] });
    alert('Purchase is complete!');
  };

  deletFromCart = (id) => {
    let cartCopy = this.state.cart.map(product => Object.assign({}, product));
    let index = this.state.cart.findIndex(product => product.id === id);

    if (cartCopy[index].quantity === 1) {
      cartCopy.splice(index, 1);
    }
    else if (cartCopy[index].quantity > 1) {
      cartCopy[index].quantity--;
    }

    this.setState({ cart: cartCopy });
  }

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            )}
          </h2>
          <button onClick={this.checkout}>Checkout</button>
          {this.state.cart.map(item => (
            <CartItems key={item.id} item={item} />
          ))}
        </section>
      </div>
    );
  }
}
