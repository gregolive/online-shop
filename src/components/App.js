import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Footer from './Footer';
import Cart from './Cart';
import CartItem from '../helpers/cartItem';

const App = () => {
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Get cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('Cart');
    if (savedCart) { setCartItems(savedCart); }
  }, []);

  // Save cart to localStorage on cartItems update
  useEffect(() => {
    localStorage.setItem('Cart', cartItems);
  }, [cartItems]);

  const toggleCart = () => setcartOpen(!cartOpen);

  const updateCart = (product, quantity) => {
    const item = cartItems.find((item) => item.product === product);
    if (typeof item === 'undefined') {
      const newItem = new CartItem(product, quantity);
      console.log(newItem);
      setCartItems(cartItems.concat(newItem));
    } else {
      item.updateQuantity(quantity);
    }
    console.log(cartItems);
  };

  return (
    <BrowserRouter>
      <Header openCart={toggleCart} cartCount={cartItems.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop updateCart={updateCart} />} />
        <Route path='/shop/:productName' element={<Product updateCart={updateCart} />} />
      </Routes>
      <Footer />
      <Cart open={cartOpen} items={cartItems} closeCart={toggleCart} updateCart={updateCart} />
    </BrowserRouter>
  );
};

export default App;
