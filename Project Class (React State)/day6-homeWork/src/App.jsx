import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';

const products = [
  { id: 1, name: 'Samsung Galaxy S8', price: 399, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Google Pixel', price: 499, image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Xiaomi Redmi Note 2', price: 699, image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Samsung Galaxy S7', price: 599, image: 'https://via.placeholder.com/100' },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>E-commerce Cart</h1>
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{getTotalItems()}</span>
        </div>
      </header>
      <div className="content">
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 && <p>Your cart is empty</p>}
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                </div>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              
            </div>
          ))}
          {cart.length > 0 && (
            <div className="cart-summary">
              <h3>Total: ${getTotalCost()}</h3>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
